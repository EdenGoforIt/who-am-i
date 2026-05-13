export interface ArticleCodeSample {
  language: string;
  filename?: string;
  code: string;
}

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  highlights?: string[];
  codeSamples?: ArticleCodeSample[];
}

export interface Article {
  title: string;
  slug: string;
  summary: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
  intro: string;
  sections: ArticleSection[];
}

export const ARTICLES_PER_PAGE = 3;

const articleEntries: Article[] = [
  {
    title: ".NET layered architecture for business systems",
    slug: "dotnet-layered-architecture",
    summary:
      "When layered architecture works in .NET, the controller problems it solves, and what the code should look like once orchestration leaves the transport layer.",
    publishedAt: "2026-05-14",
    readTime: "6 min read",
    tags: [".NET", "Architecture", "Backend"],
    intro:
      "Layered architecture is still one of the most practical choices for .NET business software when the real problem is lack of separation rather than deep domain complexity. The pattern earns its place when controllers are starting to absorb orchestration, validation, persistence, and response shaping all at once.",
    sections: [
      {
        heading: "The problem it solves",
        paragraphs: [
          "A common failure in ASP.NET backends is the all-knowing controller action: validate the request, load entities with EF Core, apply business rules, save changes, and shape the response in one method. That works at the beginning, but after enough endpoints the transport layer becomes the only place where the workflow is understandable.",
          "Layered architecture addresses that by moving workflow coordination into an application layer and keeping persistence in a separate data-access boundary. The result is not magical, but it makes the code easier to trace and change."
        ],
        highlights: [
          "Good for internal systems and line-of-business platforms.",
          "Useful when team familiarity matters more than pattern novelty.",
          "Works only if each layer keeps a clear responsibility."
        ],
        codeSamples: [
          {
            language: "csharp",
            filename: "OrdersController.cs",
            code: `public sealed class OrdersController : ControllerBase
{
    private readonly SubmitOrderService _submitOrderService;

    public OrdersController(SubmitOrderService submitOrderService)
    {
        _submitOrderService = submitOrderService;
    }

    [HttpPost("orders")]
    public async Task<IResult> Submit(SubmitOrderRequest request, CancellationToken cancellationToken)
    {
        var orderId = await _submitOrderService.ExecuteAsync(request, cancellationToken);
        return Results.Created($"/orders/{orderId}", new { orderId });
    }
}`
          }
        ]
      },
      {
        heading: "Where it breaks down",
        paragraphs: [
          "Layered architecture starts to fail when teams treat the diagram as enforcement. If controllers reach into repositories directly, services become generic utility buckets, or the data layer starts knowing too much about HTTP contracts, the structure exists only on paper.",
          "It is also not the best fit when the system has a rich domain model or highly volatile integration edges. At that point, a more explicit boundary style usually pays off better."
        ]
      }
    ]
  },
  {
    title: ".NET n-tier architecture when deployment boundaries are real",
    slug: "dotnet-n-tier-architecture",
    summary:
      "A practical look at n-tier .NET systems, when separate deployable tiers are justified, and the operational cost that comes with every extra hop.",
    publishedAt: "2026-05-13",
    readTime: "6 min read",
    tags: [".NET", "Architecture", "Backend"],
    intro:
      "N-tier architecture is often discussed as if it were just another folder layout. It is not. In .NET systems it matters when the runtime environment imposes real boundaries such as DMZ web servers, internal service networks, or restricted data tiers.",
    sections: [
      {
        heading: "The problem it solves",
        paragraphs: [
          "If a web application must sit on a separate network from internal APIs and those APIs must access a protected data tier, then deployment boundaries are not optional. In that case n-tier architecture helps align code and runtime topology with security and ownership constraints.",
          "That is useful, but it comes with a price: every network boundary creates serialization cost, retry semantics, tracing requirements, and additional failure modes."
        ],
        highlights: [
          "Use it for real operational isolation, not aesthetics.",
          "Expect observability and resiliency concerns to grow.",
          "Do not confuse a code layer with a production tier."
        ],
        codeSamples: [
          {
            language: "csharp",
            filename: "Program.cs",
            code: `builder.Services.AddHttpClient<CaseGateway>(client =>
{
    client.BaseAddress = new Uri(builder.Configuration["CaseApi:BaseUrl"]!);
    client.Timeout = TimeSpan.FromSeconds(30);
});

app.MapGet("/cases/{id}", async (
    string id,
    CaseGateway gateway,
    CancellationToken cancellationToken) =>
{
    var response = await gateway.GetCaseAsync(id, cancellationToken);
    return response is null ? Results.NotFound() : Results.Ok(response);
});`
          }
        ]
      },
      {
        heading: "The usual mistake",
        paragraphs: [
          "Teams often split deployables too early because the architecture slide looks more enterprise that way. If there is no meaningful scaling, security, or ownership requirement behind the split, the system pays operational complexity without getting a real design benefit in return."
        ]
      }
    ]
  },
  {
    title: ".NET service pattern for real application workflows",
    slug: "dotnet-service-pattern",
    summary:
      "How to use service classes in .NET to model real workflows instead of letting controllers or utility classes become the actual application layer.",
    publishedAt: "2026-05-12",
    readTime: "6 min read",
    tags: [".NET", "Architecture", "Backend"],
    intro:
      "The service pattern is useful when a request needs to coordinate more than one thing and none of that orchestration belongs in a controller. In .NET this is one of the cleanest ways to stop API endpoints from becoming the real application layer.",
    sections: [
      {
        heading: "The problem it solves",
        paragraphs: [
          "Consider a certificate submission flow that loads a draft, validates its state, updates it, saves the result, and emits an integration event. That is a workflow. If it lives in a controller, the transport layer owns the business story. If it lives in a repository, persistence owns behaviour it should not own.",
          "A service class gives that workflow a home that is explicit, testable, and named in business terms."
        ],
        highlights: [
          "Represent workflows, not generic capabilities.",
          "Keep controllers thin and transport-focused.",
          "Use clear public methods that describe one business action."
        ],
        codeSamples: [
          {
            language: "csharp",
            filename: "SubmitCertificateService.cs",
            code: `public sealed class SubmitCertificateService
{
    private readonly ICertificateRepository _certificates;
    private readonly IEventPublisher _eventPublisher;

    public SubmitCertificateService(
        ICertificateRepository certificates,
        IEventPublisher eventPublisher)
    {
        _certificates = certificates;
        _eventPublisher = eventPublisher;
    }

    public async Task<Guid> ExecuteAsync(SubmitCertificateCommand command, CancellationToken cancellationToken)
    {
        var certificate = await _certificates.GetDraftAsync(command.CertificateId, cancellationToken)
            ?? throw new InvalidOperationException("Draft certificate not found.");

        certificate.Submit(command.SubmittedBy, DateTimeOffset.UtcNow);
        await _certificates.SaveAsync(certificate, cancellationToken);
        await _eventPublisher.PublishAsync(new CertificateSubmitted(certificate.Id), cancellationToken);

        return certificate.Id;
    }
}`
          }
        ]
      },
      {
        heading: "What makes it go bad",
        paragraphs: [
          "The pattern fails when services become a dumping ground for unrelated helper logic. If the class name says `OrderService` but it contains validation helpers, PDF generation, cache management, and random queries, the service boundary has already collapsed."
        ]
      }
    ]
  },
  {
    title: ".NET repository pattern without the generic CRUD trap",
    slug: "dotnet-repository-pattern",
    summary:
      "A practical repository pattern article for .NET that focuses on domain-oriented data access and avoids the usual generic repository mistakes.",
    publishedAt: "2026-05-11",
    readTime: "6 min read",
    tags: [".NET", "Architecture", "Backend"],
    intro:
      "The repository pattern is useful in .NET when the application layer needs persistence in domain language rather than raw ORM operations. It becomes harmful when it turns into a thin generic wrapper over EF Core that hides nothing and complicates everything.",
    sections: [
      {
        heading: "The problem it solves",
        paragraphs: [
          "Without a meaningful repository boundary, EF Core usage often leaks everywhere. Includes, tracking behaviour, concurrency assumptions, and query duplication spread across handlers and services until persistence knowledge is everywhere.",
          "A good repository answers domain questions such as `GetDraftAsync` or `FindByReferenceAsync`. That keeps query intent readable and stops use-case code from depending directly on ORM mechanics."
        ],
        highlights: [
          "Use repository methods to express domain intent.",
          "Hide persistence mechanics, not useful query meaning.",
          "Avoid generic repository abstractions that just re-export `IQueryable`."
        ],
        codeSamples: [
          {
            language: "csharp",
            filename: "EfCertificateRepository.cs",
            code: `public sealed class EfCertificateRepository : ICertificateRepository
{
    private readonly ComplianceDbContext _dbContext;

    public EfCertificateRepository(ComplianceDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public Task<Certificate?> GetDraftAsync(Guid id, CancellationToken cancellationToken) =>
        _dbContext.Certificates
            .SingleOrDefaultAsync(c => c.Id == id && c.Status == CertificateStatus.Draft, cancellationToken);

    public async Task SaveAsync(Certificate certificate, CancellationToken cancellationToken)
    {
        _dbContext.Update(certificate);
        await _dbContext.SaveChangesAsync(cancellationToken);
    }
}`
          }
        ]
      },
      {
        heading: "The trap to avoid",
        paragraphs: [
          "If the repository becomes a generic CRUD toolkit that exposes everything anyway, it is not protecting the application layer. It is just adding another place where engineers have to guess how data access really works."
        ]
      }
    ]
  },
  {
    title: ".NET Onion architecture for rich domain rules",
    slug: "dotnet-onion-architecture",
    summary:
      "When Onion architecture is worth the ceremony in .NET, what kind of domain earns it, and what the core should actually contain.",
    publishedAt: "2026-05-10",
    readTime: "6 min read",
    tags: [".NET", "Architecture", "Backend"],
    intro:
      "Onion architecture only makes sense when the centre of the system has real value. If the domain contains meaningful rules that should survive technology churn, the pattern helps. If the domain is mostly CRUD, the layers become theatre.",
    sections: [
      {
        heading: "The problem it solves",
        paragraphs: [
          "Pricing, eligibility, scheduling, and regulatory workflows are all examples of logic that should remain stable even when the transport, queue, or storage technology changes. Onion architecture protects that core by ensuring outer concerns depend inward instead of the domain depending outward.",
          "That makes the model easier to test and less vulnerable to framework churn."
        ],
        highlights: [
          "Use it when the domain rules matter more than the current infrastructure stack.",
          "Keep framework references out of the centre.",
          "Make sure the core actually contains behaviour."
        ],
        codeSamples: [
          {
            language: "csharp",
            filename: "Certificate.cs",
            code: `public sealed class Certificate
{
    public Guid Id { get; private set; }
    public CertificateStatus Status { get; private set; }
    public DateTimeOffset? SubmittedAtUtc { get; private set; }

    public void Submit(string submittedBy, DateTimeOffset submittedAtUtc)
    {
        if (Status != CertificateStatus.Draft)
        {
            throw new InvalidOperationException("Only draft certificates can be submitted.");
        }

        Status = CertificateStatus.Submitted;
        SubmittedAtUtc = submittedAtUtc;
    }
}`
          }
        ]
      },
      {
        heading: "When it is too much",
        paragraphs: [
          "If entities are mostly property bags and all decisions happen elsewhere, Onion architecture adds indirection without protecting anything important. In that situation the team is maintaining a pattern instead of solving a domain problem."
        ]
      }
    ]
  },
  {
    title: ".NET ports and adapters for external integrations",
    slug: "dotnet-ports-and-adapters",
    summary:
      "A concrete ports and adapters article for .NET systems that integrate with partner APIs, queues, and unstable external boundaries.",
    publishedAt: "2026-05-09",
    readTime: "6 min read",
    tags: [".NET", "Architecture", "Backend"],
    intro:
      "Ports and adapters is most valuable in .NET systems where external integration is one of the main sources of complexity. If the workflow depends on partner APIs, queues, or file gateways, the application core should define what it needs without inheriting the shape of those protocols.",
    sections: [
      {
        heading: "The problem it solves",
        paragraphs: [
          "Without an explicit port, partner-specific DTOs, headers, timeout rules, and retry behaviour tend to leak into application code. That makes business workflows harder to test and harder to change because the integration boundary is no longer isolated.",
          "A port defines the dependency in terms of the application. The adapter absorbs the transport mechanics."
        ],
        highlights: [
          "Strong fit for API, queue, and file-based integrations.",
          "Define ports from application needs rather than SDK types.",
          "Keep partner quirks at the edge."
        ],
        codeSamples: [
          {
            language: "csharp",
            filename: "PartnerApiAdapter.cs",
            code: `public interface IPartnerCertificatePort
{
    Task SendAsync(PartnerCertificateMessage message, CancellationToken cancellationToken);
}

public sealed class PartnerApiAdapter : IPartnerCertificatePort
{
    private readonly HttpClient _httpClient;

    public PartnerApiAdapter(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }

    public Task SendAsync(PartnerCertificateMessage message, CancellationToken cancellationToken) =>
        _httpClient.PostAsJsonAsync("/certificates", message, cancellationToken);
}`
          }
        ]
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "The main benefit is not abstraction for its own sake. It is containment. When a vendor changes authentication rules or payload shape, the adapter changes instead of the application flow changing with it."
        ]
      }
    ]
  },
  {
    title: ".NET Clean Architecture without cargo-culting templates",
    slug: "dotnet-clean-architecture",
    summary:
      "How Clean Architecture helps larger .NET backends with multiple entry points, and how to avoid turning every small service into a template-driven abstraction exercise.",
    publishedAt: "2026-05-08",
    readTime: "7 min read",
    tags: [".NET", "Architecture", "Backend"],
    intro:
      "Clean Architecture is most useful when the same use cases must stay stable across several delivery mechanisms such as HTTP endpoints, queue consumers, scheduled jobs, and internal tools. The pattern is valuable when that breadth is real, not hypothetical.",
    sections: [
      {
        heading: "The problem it solves",
        paragraphs: [
          "When a backend grows, the same workflow often gets triggered from different places. If each entry point re-implements the business logic, the system drifts. Clean Architecture addresses that by making use cases explicit and keeping delivery technology outside the core workflow.",
          "That gives larger systems a stable centre for testing and change."
        ],
        highlights: [
          "Useful when the same workflow is invoked through several channels.",
          "Keep use cases delivery-agnostic.",
          "Scale the architecture to the real change surface."
        ],
        codeSamples: [
          {
            language: "csharp",
            filename: "SubmitCertificateHandler.cs",
            code: `public sealed class SubmitCertificateHandler
{
    private readonly ICertificateRepository _certificates;
    private readonly IPartnerCertificatePort _partnerPort;

    public SubmitCertificateHandler(
        ICertificateRepository certificates,
        IPartnerCertificatePort partnerPort)
    {
        _certificates = certificates;
        _partnerPort = partnerPort;
    }

    public async Task Handle(SubmitCertificateCommand command, CancellationToken cancellationToken)
    {
        var certificate = await _certificates.GetDraftAsync(command.CertificateId, cancellationToken)
            ?? throw new InvalidOperationException("Certificate not found.");

        certificate.Submit(command.SubmittedBy, DateTimeOffset.UtcNow);
        await _certificates.SaveAsync(certificate, cancellationToken);
        await _partnerPort.SendAsync(PartnerCertificateMessage.From(certificate), cancellationToken);
    }
}`
          }
        ]
      },
      {
        heading: "The template trap",
        paragraphs: [
          "The usual mistake is applying a full template to every small service before the codebase has enough complexity to justify it. That creates indirection, DTO churn, and folder depth without solving a real engineering problem."
        ]
      }
    ]
  },
  {
    title: "Angular architecture for large front-end codebases",
    slug: "angular-architecture-large-codebases",
    summary:
      "A practical Angular architecture article covering feature boundaries, folder structure, shared UI, domain services, and how to keep large applications from collapsing into folder sprawl.",
    publishedAt: "2026-05-13",
    readTime: "7 min read",
    tags: ["Angular", "Architecture", "Frontend"],
    intro:
      "Angular architecture becomes valuable when the codebase is large enough that accidental coupling is a bigger risk than initial setup cost. The goal is not an impressive folder tree. The goal is to keep features isolated, shared code intentional, and domain workflows out of the component layer.",
    sections: [
      {
        heading: "Organise by feature, not by file type",
        paragraphs: [
          "In larger Angular applications, global folders like `components`, `services`, and `models` create weak ownership boundaries. Features become spread across the app and cross-feature dependencies grow silently. Structuring by feature keeps routes, UI, orchestration, and mapping code close to the workflow they serve.",
          "That makes it easier to reason about changes because a team can inspect one slice of the codebase and see most of the behaviour that belongs to that feature. A healthy Angular architecture should be visible in the folder structure before you even open the implementation files."
        ],
        highlights: [
          "Prefer feature folders over broad type-based folders.",
          "Move code into shared space only when reuse is real.",
          "Keep workflow ownership close to route ownership."
        ],
        codeSamples: [
          {
            language: "text",
            filename: "src/app",
            code: `src/app/
  core/
    auth/
    http/
    layout/
  shared/
    ui/
      table/
      page-header/
    pipes/
    utils/
  features/
    certificates/
      pages/
        certificate-list/
        certificate-detail/
      components/
        certificate-filters/
        certificate-summary-card/
      data-access/
        certificate-api.service.ts
        certificate.mapper.ts
      state/
        certificate.facade.ts
      certificates.routes.ts
    inspections/
      pages/
      components/
      data-access/
      state/
      inspections.routes.ts`
          },
          {
            language: "typescript",
            filename: "app.routes.ts",
            code: `export const appRoutes: Routes = [
  {
    path: 'certificates',
    loadChildren: () =>
      import('./features/certificates/certificates.routes').then(m => m.CERTIFICATE_ROUTES)
  },
  {
    path: 'inspections',
    loadChildren: () =>
      import('./features/inspections/inspections.routes').then(m => m.INSPECTION_ROUTES)
  }
];`
          }
        ]
      },
      {
        heading: "Keep orchestration out of components",
        paragraphs: [
          "A component should mainly render state, emit intent, and manage view concerns. Once it starts making API calls, coordinating multiple async branches, or encoding business rules directly in handlers, the component becomes too important and too hard to change safely.",
          "I prefer to move that orchestration into a facade or feature service so components remain easier to read and easier to test."
        ],
        highlights: [
          "Let components focus on UI state and interaction.",
          "Use feature services or facades for workflow-heavy logic.",
          "Keep business rules out of templates."
        ]
      },
      {
        heading: "Shared libraries need discipline",
        paragraphs: [
          "A shared layer is useful for stable design primitives, cross-cutting utilities, and intentionally reusable workflows. It becomes dangerous when teams place code there just because they cannot decide where it belongs. That is how coupling spreads across the application under the label of reuse.",
          "The safest default is to make feature-local code cheap and shared code deliberate."
        ]
      }
    ]
  },
  {
    title: "Why Angular still works so well for complex products",
    slug: "angular-for-complex-products",
    summary:
      "Angular remains one of the most effective choices for business-heavy applications when consistency, signals-based state, and long-term maintainability matter more than novelty.",
    publishedAt: "2026-05-12",
    readTime: "8 min read",
    tags: ["Angular", "Frontend", "Architecture"],
    intro:
      "Angular suits the kind of software where complexity comes from rules, workflows, and long lifecycles rather than marketing pages. In those environments, the framework gives teams useful constraints. I see that as a strength rather than a limitation.",
    sections: [
      {
        heading: "Consistency compounds over time",
        paragraphs: [
          "Large front-end teams do not usually fail because they lack flexibility. They fail because too many equally valid approaches accumulate and every feature starts from a different set of assumptions. Angular reduces that drift by encouraging a more standard way to organise state, templates, routing, and dependency boundaries.",
          "That consistency lowers review overhead. Engineers spend less time interpreting style and more time evaluating behaviour, accessibility, and correctness."
        ],
        highlights: [
          "Shared structure improves onboarding.",
          "Convention helps keep cross-team code reviews focused.",
          "Dependency injection makes architectural seams easier to reason about."
        ]
      },
      {
        heading: "Business software benefits from explicitness",
        paragraphs: [
          "Angular is at its best when a product has rich forms, permission rules, operational workflows, and integration-heavy screens. Explicit modules, typed services, and clear template patterns help those products stay understandable as they grow.",
          "I also appreciate that Angular nudges teams toward discipline. That discipline pays off when delivery spans years, multiple squads, and a constantly evolving domain."
        ],
        highlights: [
          "Typed forms and route structure work well in workflow-heavy screens.",
          "Dependency injection helps keep feature boundaries explicit.",
          "Angular rewards consistency in long-lived products."
        ]
      },
      {
        heading: "How I use signals and effects in Angular",
        paragraphs: [
          "Signals are most useful when feature state is local, synchronous, and highly visible in the UI. I use them for selected filters, active records, loading flags, and derived values that the component tree reads often. They make that state explicit without forcing everything through a more complex stream pipeline.",
          "Effects are where I coordinate side effects from that state. Typical examples are reloading data when a selected filter changes, syncing search state into query parameters, or emitting telemetry when a view state crosses a threshold. I keep effects narrow. If an effect becomes the main place where workflow rules live, that logic usually belongs in a facade or feature service instead."
        ],
        highlights: [
          "Use signals for local reactive state and computed UI values.",
          "Use effects for loading, syncing, and other side effects.",
          "Do not let effects become an invisible workflow engine."
        ],
        codeSamples: [
          {
            language: "typescript",
            filename: "certificate-list.facade.ts",
            code: `@Injectable()
export class CertificateListFacade {
  private readonly certificateApi = inject(CertificateApi);

  readonly selectedStatus = signal<'all' | 'draft' | 'submitted'>('all');
  readonly loading = signal(false);
  readonly certificates = signal<CertificateSummary[]>([]);
  readonly filteredCertificates = computed(() => {
    const status = this.selectedStatus();
    const items = this.certificates();

    return status === 'all'
      ? items
      : items.filter(item => item.status === status);
  });

  readonly loadCertificatesEffect = effect(() => {
    const status = this.selectedStatus();
    this.loading.set(true);

    this.certificateApi.getSummaries(status).subscribe({
      next: items => {
        this.certificates.set(items);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  });
}`
          }
        ]
      },
      {
        heading: "Good Angular is still just good engineering",
        paragraphs: [
          "A framework does not rescue weak design. Angular projects still need careful state management, accessible components, sensible design tokens, and strong testing around the flows that matter most.",
          "What Angular gives you is a stable foundation. If the team uses that foundation well, the application tends to age more gracefully than many people expect."
        ]
      }
    ]
  },
  {
    title: "React works best when you stay disciplined",
    slug: "react-with-discipline",
    summary:
      "React is powerful, but the difference between a fast-moving codebase and a messy one usually comes down to whether the team establishes disciplined patterns early.",
    publishedAt: "2026-05-10",
    readTime: "6 min read",
    tags: ["React", "Frontend", "Performance"],
    intro:
      "I enjoy React most on teams that care about product polish and engineering discipline in equal measure. React gives you room to solve problems in many ways, which is exactly why teams need strong defaults for composition, state ownership, and performance.",
    sections: [
      {
        heading: "Flexibility needs guardrails",
        paragraphs: [
          "React lets teams move quickly, but that freedom becomes expensive if every feature invents its own patterns. Components should express intent clearly, state should live close to where it is used, and shared abstractions should emerge from repetition rather than guesswork.",
          "The goal is not to make React feel rigid. The goal is to make the product feel coherent, even as the codebase grows and multiple engineers contribute to it."
        ],
        highlights: [
          "Separate presentational components from workflow-heavy containers when it improves readability.",
          "Prefer a small number of predictable state patterns.",
          "Use design systems to remove avoidable UI inconsistency."
        ]
      },
      {
        heading: "Performance starts with structure",
        paragraphs: [
          "Performance issues in React often reflect structural problems more than rendering problems. Poorly scoped state, over-coupled components, and accidental re-renders create complexity that memoisation alone will not solve.",
          "When the component tree is well-shaped and responsibilities are clear, performance tuning becomes targeted and boring, which is exactly where you want it."
        ],
        highlights: [
          "Measure before optimising.",
          "Keep state ownership intentional.",
          "Use memoisation to support good design, not excuse bad design."
        ]
      },
      {
        heading: "React shines when product quality matters",
        paragraphs: [
          "React is especially strong for interfaces that need polish, iteration speed, and reusable composition. If a team pairs that with accessibility discipline and clear conventions, the result can be both fast-moving and maintainable.",
          "The framework is not the strategy. The strategy is to build a front end that other engineers can extend confidently without breaking the experience users already rely on."
        ]
      }
    ]
  },
  {
    title: "Using Claude as a serious engineering partner",
    slug: "claude-as-engineering-partner",
    summary:
      "AI tools become genuinely useful when they are treated like structured collaborators for analysis, drafting, and review instead of as shortcuts that bypass engineering judgment.",
    publishedAt: "2026-05-08",
    readTime: "5 min read",
    tags: ["AI", "Claude", "Workflow"],
    intro:
      "Claude is most useful to me when I give it a job that benefits from breadth, structure, or iteration. That includes first-pass analysis, rewrite options, documentation shaping, and sanity-checking trade-offs before I touch production code.",
    sections: [
      {
        heading: "Use AI where leverage is highest",
        paragraphs: [
          "The best use cases are the ones that reduce friction without lowering standards. I use Claude to compare approaches, draft explanations, tighten communication, and explore edge cases I want to think through before implementation.",
          "That works well because the tool accelerates thought. It does not replace ownership. Final architecture, correctness, and judgment still belong to the engineer."
        ],
        highlights: [
          "Prompt for alternatives, not just answers.",
          "Ask for trade-offs and assumptions.",
          "Use it to speed up iteration, then verify with code and tests."
        ]
      },
      {
        heading: "Context quality matters more than prompt cleverness",
        paragraphs: [
          "Useful AI collaboration depends on good context. If I provide constraints, existing patterns, and the real delivery goal, the output is usually much more relevant. Vague prompts produce vague results, which just creates extra review work.",
          "That is why I think AI fits best into disciplined teams. The better a team is at naming problems and defining outcomes, the more value they get from the tool."
        ]
      },
      {
        heading: "Treat the output like a draft",
        paragraphs: [
          "Even strong AI output should be reviewed as if a smart teammate produced a first draft. I want to inspect assumptions, simplify awkward edges, and make sure the result fits the conventions of the codebase I am actually working in.",
          "Used that way, Claude is not a gimmick. It becomes a reliable amplifier for analysis, writing, and engineering momentum."
        ]
      }
    ]
  }
];

export const articles: Article[] = articleEntries.sort(
  (left, right) => new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime()
);

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getAllArticleTags(): string[] {
  return Array.from(new Set(articles.flatMap((article) => article.tags))).sort((left, right) =>
    left.localeCompare(right)
  );
}

export function getCanonicalTag(tag?: string): string | undefined {
  if (!tag) {
    return undefined;
  }

  return getAllArticleTags().find((entry) => entry.toLowerCase() === tag.toLowerCase());
}

export function getPaginatedArticles({ page, tag }: { page?: number; tag?: string }): {
  items: Article[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
  selectedTag?: string;
} {
  const selectedTag = getCanonicalTag(tag);
  const filteredArticles = selectedTag
    ? articles.filter((article) => article.tags.includes(selectedTag))
    : articles;

  const totalItems = filteredArticles.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / ARTICLES_PER_PAGE));
  const currentPage = Math.min(Math.max(page ?? 1, 1), totalPages);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;

  return {
    items: filteredArticles.slice(startIndex, startIndex + ARTICLES_PER_PAGE),
    currentPage,
    totalPages,
    totalItems,
    selectedTag
  };
}

export function getRelatedArticles(slug: string, limit = 2): Article[] {
  const currentArticle = getArticleBySlug(slug);

  if (!currentArticle) {
    return [];
  }

  return articles
    .filter((article) => article.slug !== slug)
    .sort((left, right) => {
      const leftOverlap = left.tags.filter((tag) => currentArticle.tags.includes(tag)).length;
      const rightOverlap = right.tags.filter((tag) => currentArticle.tags.includes(tag)).length;
      return rightOverlap - leftOverlap;
    })
    .slice(0, limit);
}
