# conciencia
Prototipo de la pagina web de conciencia.

::: mermaid
graph TD
    A[Inicio: Usuario entra a conciencIA] --> B{¿Está Logueado?}
    
    %% Flujo Público
    B -- No --> C[Landing Page / Home]
    C --> D[Navegación Pública]
    D --> E[Servicios]
    D --> F[Quiénes Somos]
    D --> G[Contacto]
    C --> H[Botón: Acceso Clientes]
    
    %% Flujo de Autenticación
    H --> I[Pantalla de Login]
    I --> J{Validar Credenciales}
    J -- Inválido --> I
    J -- Válido --> K[Dashboard Principal]
    
    %% Flujo de la Herramienta (Core)
    K --> L[Input: Ingresar Texto a Analizar]
    L --> M{Enviar a Motor IA}
    
    %% Proceso Interno (Backend)
    M -->|Solicitud API| N[Servidor Backend]
    N -->|Procesamiento NLP| O[Modelo de Detección de Sesgos]
    O -->|Resultados| P[Respuesta JSON]
    
    %% Resultado al Usuario
    P --> Q[Frontend: Mostrar Resultado]
    Q --> R{¿Usuario solicita mejora?}
    R -- Sí --> S[Generar Versión Ética]
    S --> Q
    R -- No --> K

    %% Estilos del diagrama
    style K fill:#0891b2,stroke:#333,stroke-width:2px,color:white
    style O fill:#7e22ce,stroke:#333,stroke-width:2px,color:white
:::