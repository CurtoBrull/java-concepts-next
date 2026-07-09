import { Concept } from '@/types/concept';

export const concepts: Concept[] = [
  {
    id: 1,
    title: 'Clase',
    slug: 'clase',
    block: 'JAVA_CORE',
    orderIndex: 1,
    description: 'Una clase es la plantilla fundamental en Java para crear objetos. Define los atributos (estado) y métodos (comportamiento) que tendrán las instancias. Todo código Java reside dentro de clases. Una clase puede tener modificadores de acceso, y representa el plano fundamental de la programación orientada a objetos.',
    codeExample: null,
    questions: [
      { question: '¿Qué es una clase en Java?', answer: 'Una clase es una plantilla o molde que define la estructura y el comportamiento de los objetos. Se declara con la palabra clave class y sirve como plano para crear instancias con new. Una clase puede contener campos (atributos), constructores, métodos y clases internas.' },
      { question: '¿Diferencia entre clase y objeto?', answer: 'La clase es la definición/plantilla; el objeto es la instancia concreta creada a partir de esa plantilla. La clase describe qué atributos y métodos tendrá cada objeto. El objeto es la realidad en memoria con valores específicos en sus atributos. Ejemplo: la clase Persona define el plano; Juan con nombre=Juan y edad=25 es un objeto.' },
      { question: '¿Una clase puede heredar de varias clases?', answer: 'No, Java no soporta herencia múltiple de clases. Una clase solo puede extender a una única clase padre. Para lograr comportamiento múltiple, Java usa interfaces (una clase puede implementar múltiples interfaces). Esto evita problemas de diamante y mantiene la jerarquía simple.' }
    ],
    subConcepts: [
      {
        title: 'Constructores',
        slug: 'constructores',
        orderIndex: 1,
        description: 'Los constructores inicializan objetos. Si no declaras ninguno, Java provee uno sin argumentos (default). Puedes sobrecargar constructores (múltiples con diferentes parámetros). Usa this() para encadenar constructores dentro de la misma clase o super() para llamar al constructor padre.',
        codeExample: `public class Persona {
    private String nombre;

    // Constructor sin argumentos (default si no hay otros)
    public Persona() {
        this.nombre = "Anónimo";
    }

    // Constructor con parámetros
    public Persona(String nombre) {
        this.nombre = nombre;
    }

    // Encadenamiento de constructores
    public Persona(String nombre, int edad) {
        this(nombre); // llama al constructor con 1 parámetro
    }
}`,
        questions: [
          { question: '¿Qué pasa si no declaras ningún constructor?', answer: 'Java proporciona automáticamente un constructor sin argumentos (default). Este constructor inicializa los campos con sus valores por defecto (0 para numéricos, null para referencias, false para booleanos). Si declaras cualquier constructor, el default desaparece.' },
          { question: '¿Qué es el encadenamiento de constructores?', answer: 'Es llamar a otro constructor de la misma clase con this() o al constructor padre con super(). this() debe ser la primera línea. Permite reutilizar lógica entre constructores y evita duplicación de código de inicialización.' },
          { question: '¿Puede un constructor llamar a métodos?', answer: 'Sí, pero es una práctica de riesgo. Si llamas a un método overridden en el constructor, y la subclase aún no se ha construido completamente, puedes acceder a estado inconsistente. El método se ejecutará con datos parciales del objeto en construcción.' }
        ]
      },
      {
        title: 'Modificadores de acceso',
        slug: 'modificadores-acceso',
        orderIndex: 2,
        description: 'Los modificadores controlan la visibilidad de clases, atributos, métodos y constructores. Java tiene 4 niveles: public (todas las clases), protected (subclases y paquete), default/package-private (solo paquete), private (solo la clase que lo declara).',
        codeExample: `public class Ejemplo {
    public int a;           // accesible desde cualquier lugar
    protected int b;        // accesible desde paquete y subclases
    int c;                  // default: solo paquete
    private int d;           // solo esta clase

    public void metodoPublico() {}
    private void metodoPrivado() {}
}`,
        questions: [
          { question: '¿Cuál es la diferencia entre default y protected?', answer: 'Default (sin modificador): accesible solo desde clases en el mismo paquete. Protected: accesible desde subclases (incluso en paquetes diferentes) Y desde clases en el mismo paquete.' },
          { question: '¿Se puede aplicar modificadores de acceso a clases?', answer: 'Sí. Top-level classes solo pueden ser public o default (package-private). Clases internas pueden tener todos los modificadores.' }
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Objeto',
    slug: 'objeto',
    block: 'JAVA_CORE',
    orderIndex: 2,
    description: 'Un objeto es una instancia de una clase. Existe en memoria (heap) y tiene identidad propia, estado (valores de sus atributos) y comportamiento (sus métodos). Los objetos se comunican mediante mensajes (llamadas a métodos). En Java, todo excepto tipos primitivos es un objeto.',
    codeExample: null,
    questions: [
      { question: '¿Qué es un objeto en Java?', answer: 'Un objeto es una instancia concreta de una clase, creada en tiempo de ejecución mediante new. Cada objeto tiene su propia identidad (dirección de memoria única), estado (valores de sus atributos) y comportamiento (métodos que puede ejecutar). Los objetos residen en el heap y son gestionados por el garbage collector cuando ya no hay referencias.' },
      { question: '¿Qué es el estado de un objeto?', answer: 'El estado son los valores actuales de todos los atributos (campos) del objeto. Se almacena en los campos de instancia. Dos objetos de la misma clase pueden tener estados diferentes. El estado puede cambiar a lo largo de la vida del objeto mediante la ejecución de métodos que modifican sus atributos.' },
      { question: '¿Qué es la identidad de un objeto?', answer: 'La identidad es lo que distingue a un objeto de otro, incluso si tienen el mismo estado. En Java, la identidad está implementada por la referencia en memoria (dirección del heap). Cada objeto tiene una identidad única. La identidad se usa en comparaciones con == (compara referencias) y en operaciones de colección.' }
    ],
    subConcepts: [
      {
        title: 'equals y hashCode',
        slug: 'equals-hashcode',
        orderIndex: 2,
        description: 'equals define igualdad lógica; == compara referencias (dirección de memoria). Por defecto, equals de Object usa ==. hashCode genera un int para estructuras hash (HashMap, HashSet). El contrato: objetos iguales deben tener igual hashCode.',
        codeExample: `public class Persona {
    private String dni;
    private String nombre;

    // JAVA 16+ pattern matching
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Persona p)) return false;
        return Objects.equals(dni, p.dni) && Objects.equals(nombre, p.nombre);
    }

    @Override
    public int hashCode() {
        return Objects.hash(dni, nombre);
    }
}`,
        questions: [
          { question: '¿Por qué siempre que override equals debes override hashCode?', answer: 'El contrato de hashCode dice: objetos iguales deben producir el mismo hash. Si no lo haces, HashMap y HashSet fallarán: put(equals) puede guardar en cubetas equivocadas, y get(equals) no encontrará objetos. Es una source de bugs sutiles.' },
          { question: 'equals vs == en objetos?', answer: '== compara referencias: true si apuntan al mismo objeto en memoria. equals compara contenido/lógica: true si el significado es igual. Para String, equals compara texto, == compara referencias (puede fallar con interning). Siempre usa equals para contenido, == para identidad.' },
          { question: '¿Qué es el método equals por defecto de Object?', answer: 'return this == obj;. Compara referencias. Si no override, objetos distintos siempre serán diferentes. Esto es correcto para entidades con identity única, pero incorrecto para value objects que deberían ser iguales si tienen los mismos valores.' }
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Herencia',
    slug: 'herencia',
    block: 'JAVA_CORE',
    orderIndex: 3,
    description: 'La herencia permite crear nuevas clases basadas en clases existentes. La subclase hereda los campos y métodos de la superclase. Se usa para reutilización de código y polimorfismo. En Java, una clase solo puede extender a una clase (herencia simple), pero puede implementar múltiples interfaces.',
    codeExample: null,
    questions: [
      { question: '¿Herencia simple vs múltiple?', answer: 'Java solo permite herencia simple de clases (extends una clase). Pero puedes implementar múltiples interfaces. Esto evita el problema del diamante de C++ y mantiene la jerarquía simple.' },
      { question: '¿Qué se hereda y qué no?', answer: 'Se heredan: campos (incluidos private pero accesibles via getters/setters), métodos. No se hereden: constructores (se llaman con super()). private fields no son accesibles directamente.' },
      { question: '¿Qué es super?', answer: 'super se usa para invocar el constructor de la clase padre (super()) o métodos de la clase padre (super.metodo()). Debe ser la primera línea del constructor.' }
    ],
    subConcepts: []
  },
  {
    id: 4,
    title: 'Polimorfismo',
    slug: 'polimorfismo',
    block: 'JAVA_CORE',
    orderIndex: 4,
    description: 'Polimorfismo permite que objetos de diferentes clases sean tratados como objetos de una clase común. En tiempo de compilación (overloading) o ejecución (overriding). Es uno de los pilares de OOP junto con herencia, encapsulamiento y abstracción.',
    codeExample: null,
    questions: [
      { question: '¿Qué es overload y override?', answer: 'Overload: mismo nombre, diferentes parámetros (compiletime). Override: subclass redefine método de superclase con misma firma (runtime).' },
      { question: '¿Qué es upcasting y downcasting?', answer: 'Upcasting: subclase a superclase (automático, seguro). Downcasting: superclase a subclase (manual, puede lanzar ClassCastException si no es válido).' }
    ],
    subConcepts: []
  },
  {
    id: 5,
    title: 'Encapsulamiento',
    slug: 'encapsulamiento',
    block: 'JAVA_CORE',
    orderIndex: 5,
    description: 'Encapsulamiento oculta los detalles internos de una clase y expone solo lo necesario. Se logra con modificadores de acceso (private, public, protected) y métodos getters/setters. Protege el estado interno de modificaciones indebidas y mantiene la integridad del objeto.',
    codeExample: null,
    questions: [
      { question: '¿Por qué encapsulate?', answer: '1) Protege estado interno de cambios inconscientes. 2) Permite cambiar implementación sin afectar a quienes usan la clase. 3) Controla cómo se accede y modifica los datos.' },
      { question: '¿Getters/setters son obligatorios?', answer: 'No, pero es la convención. Para campos immutables, solo getters. Si no necesitas acceso, puedes no crearlos.' }
    ],
    subConcepts: []
  },
  {
    id: 6,
    title: 'Interface',
    slug: 'interface',
    block: 'JAVA_CORE',
    orderIndex: 6,
    description: 'Una interfaz define un contrato que las clases pueden implementar. Hasta Java 7 solo tenía métodos abstractos. Desde Java 8 tiene default methods (con implementación) y static methods. Desde Java 9 tiene private methods. Una clase puede implementar múltiples interfaces.',
    codeExample: null,
    questions: [
      { question: '¿Qué es una interfaz?', answer: 'Un contrato que define qué métodos debe implementar una clase. No tiene estado (excepto constantes static). Una clase puede implementar múltiples interfaces.' },
      { question: '¿Qué son default methods?', answer: 'Métodos con implementación en interfaces (desde Java 8). Permiten añadir métodos a interfaces sin romper implementaciones existentes. Resuelven el problema de evolución de APIs.' },
      { question: '¿Java tiene herencia múltiple de implementación?', answer: 'No de clases. Solo puede extender una clase (extends). Pero puede implementar múltiples interfaces (implements A, B, C). Esto es herencia múltiple de tipo/contrato, no de estado o implementación (excepto default methods). Es más seguro que la herencia de implementación múltiple de C++.' }
    ],
    subConcepts: [
      {
        title: '@FunctionalInterface y Lambdas',
        slug: 'functional-interface-lambda',
        orderIndex: 4,
        description: 'Interfaces funcionales son el target de lambda expressions.',
        codeExample: `// @FunctionalInterface: marca interface como funcional
@FunctionalInterface
public interface Calculadora {
    int calcular(int a, int b);
}

// Uso con lambda
Calculadora suma = (a, b) -> a + b;
Calculadora multiplica = (a, b) -> a * b;
suma.calcular(5, 3);  // 8
multiplica.calcular(5, 3);  // 15

// Lambdas con cuerpos bloque
Calculadora resta = (a, b) -> {
    int resultado = a - b;
    return resultado;
};

// Method reference como lambda
Calculadora referencia = Integer::sum;

// Functional interfaces comunes en java.util.function
Function<String, Integer> length = String::length;
Consumer<String> printer = System.out::println;
Supplier<LocalDate> ahora = LocalDate::now;
Predicate<String> noVacia = String::isEmpty;`,
        questions: [
          { question: '¿Qué es @FunctionalInterface?', answer: 'Anotación que marca una interfaz como funcional (exactamente un método abstracto). El compilador verifica que la interfaz cumple: solo un método abstracto (puede tener default, static, private). Si violas el contrato, error de compilación.' },
          { question: '¿Por qué lambdas solo funcionan con interfaces funcionales?', answer: 'Una lambda es una implementación de una interfaz funcional. La lambda (a, b) -> a + b implementa una interfaz con un método abstracto que toma dos ints y devuelve int.' }
        ]
      }
    ]
  },
  {
    id: 10,
    title: 'Colecciones',
    slug: 'colecciones',
    block: 'JAVA_CORE',
    orderIndex: 10,
    description: 'Framework unificado para representar y manipular grupos de objetos. Jerarquía: Collection (List, Set, Queue) y Map. Implementaciones: ArrayList, LinkedList, HashSet, LinkedHashSet, TreeSet, HashMap, LinkedHashMap, TreeMap.',
    codeExample: null,
    questions: [
      { question: '¿Collection vs Collections?', answer: 'Collection es la interfaz raíz del framework. Collections es una clase utilitaria con métodos estáticos (sort, shuffle, reverse, etc).' },
      { question: '¿Cuándo usar List vs Set?', answer: 'List: ordenado, permite duplicados, acceso por índice. Set: no permite duplicados, uso para membership/testing.' },
      { question: '¿Cuándo usar HashMap vs TreeMap?', answer: 'HashMap: O(1) operaciones, sin orden. TreeMap: O(log n), orden natural o comparator.' }
    ],
    subConcepts: []
  },
  {
    id: 11,
    title: 'Streams',
    slug: 'streams',
    block: 'JAVA_CORE',
    orderIndex: 11,
    description: 'Secuencia de elementos que soporta operaciones intermedias y terminales. No modifica la fuente original. Lazy evaluation: solo se ejecutan cuando hay operación terminal. Permite procesamiento funcional de colecciones.',
    codeExample: null,
    questions: [
      { question: '¿Stream vs Collection?', answer: 'Collection es una estructura de datos en memoria. Stream no almacena elementos, procesa bajo demanda. Stream es consumible (una vez recorrido, se cierra).' },
      { question: '¿Por qué Stream es lazy?', answer: 'Las operaciones intermedias retornan nuevo Stream y no ejecutan nada hasta que se invoca operación terminal. Permite optimizaciones como short-circuiting.' }
    ],
    subConcepts: []
  },
  {
    id: 30,
    title: 'equals() y hashCode()',
    slug: 'equals-hashcode',
    block: 'JAVA_CORE',
    orderIndex: 31,
    description: 'equals() define igualdad lógica entre objetos. == compara referencias (dirección). hashCode() devuelve int para usar en tablas hash (HashMap, HashSet, HashTable). El CONTRATO: objetos iguales DEBEN tener igual hashCode.',
    codeExample: `import java.util.Objects;

public class Persona {
    private String dni;
    private String email;
    private int edad;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Persona persona = (Persona) o;
        return edad == persona.edad &&
               Objects.equals(dni, persona.dni) &&
               Objects.equals(email, persona.email);
    }

    @Override
    public int hashCode() {
        return Objects.hash(dni, email, edad);
    }
}`,
    questions: [
      { question: '¿Por qué es importante el contrato equals-hashCode?', answer: 'HashMap/HashSet usan hashCode() para colocar objetos en buckets. Luego usan equals() para encontrar el objeto exacto. Si dos objetos son equals() pero tienen hashCode() diferente, terminan en buckets diferentes y HashMap NO los encontrará.' },
      { question: '¿Qué es el contrato entre equals y hashCode?', answer: '1) Reflexivo: a.equals(a) es true. 2) Simétrico: a.equals(b) == b.equals(a). 3) Transitivo. 4) Consistente. 5) a.equals(null) es false. 6) Si a.equals(b) es true → a.hashCode() == b.hashCode()' },
      { question: '¿equals() vs ==?', answer: '== para primitivos compara el valor. Para referencias, compara la dirección de memoria (identidad). equals() en Object es == por defecto. Override equals() para definir igualdad LÓGICA.' }
    ],
    subConcepts: [
      {
        title: 'Implementación correcta',
        slug: 'equals-hashcode-implementacion',
        orderIndex: 1,
        description: 'Cómo implementar equals() y hashCode() correctamente usando IDE o libraries.',
        codeExample: `import java.util.Objects;

public class Persona {
    private String dni;
    private String email;
    private int edad;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Persona persona = (Persona) o;
        return edad == persona.edad &&
               Objects.equals(dni, persona.dni) &&
               Objects.equals(email, persona.email);
    }

    @Override
    public int hashCode() {
        return Objects.hash(dni, email, edad);
    }
}`,
        questions: [
          { question: '¿Por qué usar Objects.equals() y Objects.hash()?', answer: 'Objects.equals(a, b) maneja null safely. Objects.hash() crea hashCode combinando los campos. Asegura consistencia y reduce boilerplate.' },
          { question: '¿hashCode() debe usar los mismos campos que equals()?', answer: 'SÍ. Si overrideas equals para comparar dni y email, hashCode DEBE usar solo dni y email. Si incluyes un campo extra (ej: edad) en hashCode pero no en equals, puedes tener: dos Personas con mismo dni/email pero diferente edad. Son equals() pero hashCode diferente → Bug en HashMap.' }
        ]
      }
    ]
  },
  {
    id: 32,
    title: 'DateTime API (Java 8+)',
    slug: 'datetime-api',
    block: 'JAVA_CORE',
    orderIndex: 33,
    description: 'Nuevo API de fecha y hora en java.time (reemplaza Date y Calendar). Tipos inmutables: LocalDate (fecha), LocalTime (hora), LocalDateTime (fecha y hora), ZonedDateTime (con zona), Instant (momento), Duration (diferencia en segundos/nanos), Period (diferencia en días/meses/años).',
    codeExample: `LocalDate hoy = LocalDate.now();
LocalDate nacimiento = LocalDate.of(1990, 5, 15);
Period edad = Period.between(nacimiento, hoy);
int anios = edad.getYears();

LocalDateTime ahora = LocalDateTime.now();
ZonedDateTime madrid = ZonedDateTime.now(ZoneId.of("Europe/Madrid"));
Instant instant = Instant.now();

Duration duracion = Duration.ofHours(2);
LocalDateTime fin = ahora.plus(duracion);`,
    questions: [
      { question: '¿Por qué java.time en vez de Date/Calendar?', answer: 'java.time es inmutable (thread-safe), tiene mejor API, soporta zonas horarias correctamente, y no tiene los bugs de Date (meses 0-indexed, etc).' },
      { question: '¿Duration vs Period?', answer: 'Duration para diferencias en segundos/nanos (para tiempos). Period para diferencias en días/meses/años (para fechas). Duration.ofHours(2). Period.ofDays(2).' },
      { question: '¿ZonedDateTime vs Instant?', answer: 'ZonedDateTime: fecha-hora con zona horaria-aware. Instant: momento en UTC (/epoch seconds). Para storage/logs: Instant. Para mostrar a usuarios: ZonedDateTime.' }
    ],
    subConcepts: []
  },
  {
    id: 33,
    title: 'Garbage Collectors',
    slug: 'garbage-collectors',
    block: 'JAVA_CORE',
    orderIndex: 33,
    description: 'Los GC gestionan memoria liberando objetos sin referencias. G1GC es el default desde Java 9. Selección: Serial (aplicaciones pequeñas), Parallel (throughput), G1 (balanceado), ZGC (baja latencia <10ms), Shenandoah (baja latencia, throughput independientes).',
    codeExample: `# Seleccionar GC
-XX:+UseG1GC        # G1 (default desde Java 9)
-XX:+UseZGC         # ZGC - baja latencia
-XX:+UseShenandoahGC # Shenandoah
-XX:+UseSerialGC    # Serial (dev, small apps)

# ZGC específico
-XX:MaxGCPauseMillis=5  # target max pause

# G1 específico
-XX:MaxGCPauseMillis=200 # target max pause
-XX:+UseStringDeduplication # reducir memoria strings`,
    questions: [
      { question: '¿Cómo elegir GC?', answer: 'Aplicaciones web/API normales: G1 (default). Baja latencia extrema (<10ms): ZGC. Throughput puro (batch jobs): Parallel. Applets/pequeñas: Serial.' },
      { question: '¿ZGC vs Shenandoah?', answer: 'ZGC escala con heap grande (>100GB) con pausas <10ms pero pausa stop-the-world. Shenandoah tiene pausas independientes del heap size y no reescribe punteros. Ambos no son stop-the-world.' }
    ],
    subConcepts: []
  },
  {
    id: 34,
    title: 'Parallel Streams',
    slug: 'parallel-streams',
    block: 'JAVA_CORE',
    orderIndex: 34,
    description: 'Streams secuenciales se vuelven paralelos con .parallel(). Usan ForkJoinPool.commonPool() (n-1 threads). Order se pierde por defecto. Operaciones stateless y associative son ideales. Cuidado: side effects, orden, shared state.',
    codeExample: `// Paralelo: usa todos los cores
list.parallelStream()
    .map(String::toUpperCase)
    .collect(Collectors.toList());

// Secuencial forzado
stream.parallel()
    .map(...)
    .sequential(); // último gana

// Configurar pool
ForkJoinPool commonPool = ForkJoinPool.commonPool();
commonPool.getParallelism(); // n-1 cores

// WARNING: no shared state
int counter = 0;
stream.parallel().forEach(e -> counter++); // RACE CONDITION!

// CORRECTO: usar reduce o collect
int sum = list.parallelStream()
    .mapToInt(Integer::intValue)
    .sum();`,
    questions: [
      { question: '¿Cuándo NO usar parallel streams?', answer: '1) Streams muy pequeños (overhead > beneficio). 2) Operaciones con side effects (shared state). 3) Cuando necesitas orden (usar forEachOrdered). 4) Operations no son associative (a+b != b+a). 5) I/O blocking (database calls).' },
      { question: '¿Parallel streams usan todos los cores?', answer: 'Usa ForkJoinPool.commonPool() que por defecto tiene parallelism = n-1 donde n es CPU cores. Puedes cambiar con system property: -Djava.util.concurrent.ForkJoinPool.common.parallelism=4' }
    ],
    subConcepts: []
  },
  {
    id: 35,
    title: 'Anotaciones',
    slug: 'anotaciones',
    block: 'JAVA_CORE',
    orderIndex: 35,
    description: 'Metadatos que se añaden al código. start con @. Pueden tener atributos. RetentionPolicy: SOURCE (compilador), CLASS (bytecode, runtime default), RUNTIME (reflection). Target: dónde se pueden aplicar (TYPE, METHOD, FIELD, etc).',
    codeExample: `// Anotaciones comunes del JDK
@Override           // compila solo si hay método para override
@Deprecated         // marca obsoleto, compiler warning
@FunctionalInterface // marca interface como funcional
@SuppressWarnings("unchecked") // ignora warnings
@SafeVarargs        // para métodos varargs con generics

// Custom anotación
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.METHOD, ElementType.TYPE})
public @interface MiAnotacion {
    String valor() default "default";
    int prioridad() default 0;
}

// Uso
@MiAnotacion(valor = "test", prioridad = 1)
public void miMetodo() {}

// Leer en runtime con reflection
MiAnotacion ann = metodo.getClass().getMethod("miMetodo")
    .getAnnotation(MiAnotacion.class);
ann.valor(); // "test"`,
    questions: [
      { question: '¿Para qué sirven las anotaciones?', answer: '1) Compilador: @Override, @Deprecated. 2) IDE: warnings, suggestions. 3) Frameworks: Spring, JUnit las leen con reflection. 4) Generación de código: Lombok, MapStruct. 5) Documentación: Javadoc.' },
      { question: '¿@Override es obligatoria?', answer: 'No, pero MUY recomendada. Si el método no hace override (错字 en nombre o firma), el compilador da error. Sin @Override, simplemente el método nuevo se trata como nuevo, no como override, lo cual puede ser bug.' }
    ],
    subConcepts: []
  },
  {
    id: 36,
    title: 'Reflection',
    slug: 'reflection',
    block: 'JAVA_CORE',
    orderIndex: 36,
    description: 'Capacidad de inspeccionar y manipular clases, métodos, campos en runtime. Class.forName(), getDeclaredMethods(), getDeclaredField(). Usado por frameworks (Spring, JUnit) para crear beans, inyección de dependencias, testing. PERFORMANCE: es lento.',
    codeExample: `// Obtener Class
Class<?> clazz = Class.forName("com.ejemplo.Persona");
Class<?> clazz2 = Persona.class;

// Inspect methods
Method[] methods = clazz.getDeclaredMethods();
for (Method m : methods) {
    System.out.println(m.getName());
    System.out.println(Arrays.toString(m.getParameterTypes()));
}

// Invocar método
Object instance = clazz.getDeclaredConstructor().newInstance();
Method setter = clazz.getDeclaredMethod("setNombre", String.class);
setter.invoke(instance, "Ana");

// Acceder campo privado
Field campo = clazz.getDeclaredField("nombre");
campo.setAccessible(true); // bypass private
String valor = (String) campo.get(instance);

// Spring/JUnit usan esto para:
// - @Autowired: inyectar dependencias
// - @Test: marcar métodos de test
// - @Component: detectar beans`,
    questions: [
      { question: '¿Por qué reflection es lento?', answer: '1) Dynamic linking: se resuelven clases en runtime. 2) Type checking en runtime. 3) Security checks. 4) No JIT optimization para código dinámico. Usar solo cuando necesario.' },
      { question: '¿Seguridad con reflection?', answer: 'SecurityManager puede restringirlo. En modernas JVMs, modules system (Java 9+) limita reflection en APIs internas (-add-opens para exponer).' }
    ],
    subConcepts: []
  },
  {
    id: 37,
    title: 'JVM Memory Model',
    slug: 'jvm-memory-model',
    block: 'JAVA_CORE',
    orderIndex: 37,
    description: 'JVM memory areas: Heap (objetos, GC), Stack (frames de métodos, LIFO), Metaspace (class metadata, replaces PermGen desde Java 8), PC Register (instrucción actual), Native Stack (métodos nativos). Escape analysis determina si objeto va a heap o stack.',
    codeExample: `// JVM Memory Areas
// ====================
// HEAP: objetos allocation dinámica
// - Young Generation (Eden + Survivor spaces)
// - Old Generation (tenured)
// - G1 regions (desde Java 9)

// STACK: uno por thread, LIFO
void metodo() {
    int x = 1;                    // en stack
    Object obj = new Object();     // referencia en stack, objeto en heap
}

// METASPACE: class metadata (replaced PermGen)
// - Class names
// - Methods metadata
// - Constant pool

// PC REGISTER: thread-specific
// - Current executing instruction

// Config
-Xms512m -Xmx2g           // heap inicial y máximo
-XX:MaxMetaspaceSize=256m // metaspace máximo
-Xss1m                     // stack size por thread`,
    questions: [
      { question: '¿Qué es escape analysis?', answer: 'JIT analiza si un objeto escapa del método. Si no escapa (solo usado dentro), puede alloc en stack en vez de heap. Reduce GC pressure. return obj; hace escape. pasarlo a otro método también.' },
      { question: '¿Metaspace vs PermGen?', answer: 'PermGen (Java <8) tenía tamaño fijo, causaba OutOfMemoryError. Metaspace (Java 8+) usa memoria nativa, crece dinámicamente. MetaspaceSize es soft limit.' }
    ],
    subConcepts: []
  },
  {
    id: 38,
    title: 'Records',
    slug: 'records',
    block: 'JAVA_CORE',
    orderIndex: 38,
    description: 'Clases inmutables para datos puros (Java 16+). Sintaxis concisa: record Point(int x, int y). Genera automáticamente: constructor canónico, getters (x(), y()), equals(), hashCode(), toString(). Pueden tener métodos, constructores adicionales, implementar interfaces.',
    codeExample: `// Record básico
public record Persona(String dni, String nombre, int edad) {}

// Uso
Persona p = new Persona("12345678A", "Ana", 30);
p.dni();    // getter, no getDni()
p.nombre(); // getter
p.edad();   // getter

// Constructor compacto (validación)
public record Persona(String dni, String nombre, int edad) {
    public Persona {
        if (edad < 0) throw new IllegalArgumentException("edad negativa");
        // Los parámetros están disponibles para inicializar fields
    }
}

// Constructor adicional
public record Range(int min, int max) {
    public Range(int value) {
        this(value, value); // delega al canónico
    }
}

// Methods
public record Point(int x, int y) {
    public Point { x = Math.abs(x); y = Math.abs(y); } // compact
    public double distanceFromOrigin() {
        return Math.sqrt(x*x + y*y);
    }
}

// Implement interface
public record IdWrapper(int id) implements Identifiable {
    @Override public int getId() { return id; }
}`,
    questions: [
      { question: '¿Cuándo usar records?', answer: '1) DTOs (Data Transfer Objects). 2) Valores compuestos inmutables. 3) Resultados de queries. 4) Keys de Map. 5) Parámetros de métodos. NO usar para entidades con ID que cambia.' },
      { question: '¿Record vs class inmutable?', answer: 'Record genera automáticamente constructor canónico, getters, equals, hashCode, toString. Class inmutable requiere escribir todo manualmente. Record es más conciso para data carriers.' },
      { question: '¿Record vs Enum?', answer: 'Enum para un conjunto fijo de constantes. Record para estructuras de datos con campos. Enum puede implementar interfaces, tiene métodos abstractos.' }
    ],
    subConcepts: []
  },
  // ==========================================
  // APIS
  // ==========================================
  {
    id: 100,
    title: 'Collections API',
    slug: 'collections-api',
    block: 'APIS',
    orderIndex: 1,
    description: 'Framework unificado para representar y manipular colecciones de objetos. Interfaces raíz: Collection, List, Set, Queue, Deque. Map es independiente. Implementaciones: ArrayList, LinkedList, HashSet, LinkedHashSet, TreeSet, HashMap, LinkedHashMap, TreeMap.',
    codeExample: `// List - ordenado, duplicados OK
List<String> list = new ArrayList<>();
list.add("a");
list.get(0);  // acceso por índice O(1)

// Set - sin duplicados
Set<String> set = new HashSet<>();
set.add("a");
set.contains("a");  // O(1)

// Map - clave/valor
Map<String, Integer> map = new HashMap<>();
map.put("a", 1);
map.get("a");  // O(1)

// Orden de iteración
Set<String> orderedSet = new LinkedHashSet<>();
Map<String, Integer> treeMap = new TreeMap<>();`,
    questions: [
      { question: 'Collection vs Collections?', answer: 'Collection es la interfaz raíz del framework. Collections es una clase utilitaria con métodos estáticos (sort, shuffle, reverse, etc).' },
      { question: 'ArrayList vs LinkedList?', answer: 'ArrayList: acceso por índice O(1), inserción/borrado al final O(1), al inicio O(n). LinkedList: búsqueda O(n), inserción/borrado O(1) si tienes referencia. ArrayList es default por cache locality.' }
    ],
    subConcepts: [
      {
        title: 'List, Set, Map',
        slug: 'collections-list-set-map',
        orderIndex: 1,
        description: 'Interfaces principales y sus implementaciones.',
        codeExample: `// List - ordenado, duplicados OK
List<String> list = new ArrayList<>();
list.add("a");
list.get(0);  // acceso por índice O(1)
list.remove(0);

// Set - sin duplicados
Set<String> set = new HashSet<>();
set.add("a");
set.add("a");  // ignora duplicado
set.contains("a");  // O(1)

// Map - clave/valor
Map<String, Integer> map = new HashMap<>();
map.put("a", 1);
map.get("a");  // O(1)
map.containsKey("a");`,
        questions: [
          { question: '¿Cuándo usar HashMap vs TreeMap vs LinkedHashMap?', answer: 'HashMap: performance O(1), sin orden. TreeMap: orden natural o comparator O(log n). LinkedHashMap: orden de inserción O(1).' }
        ]
      },
      {
        title: 'Queue y Deque',
        slug: 'collections-queue-deque',
        orderIndex: 2,
        description: 'Colas y doble-ended queues para FIFO y LIFO.',
        codeExample: `// Queue - FIFO
Queue<String> queue = new LinkedList<>();
queue.offer("primero");
queue.poll();  // remover y devolver
queue.peek();  // ver sin remover

// Deque - doble extremo
Deque<String> deque = new ArrayDeque<>();
deque.offerFirst("a");
deque.offerLast("b");
deque.pollFirst();
deque.pollLast();

// PriorityQueue
Queue<Integer> pq = new PriorityQueue<>(Comparator.reverseOrder());
pq.offer(3);
pq.poll();  // devuelve 3`,
        questions: [
          { question: '¿Deque vs Queue normal?', answer: 'Deque permite añadir/remover de ambos extremos. Queue solo permite FIFO: añadir al final, remover del inicio. Deque es más flexible.' }
        ]
      }
    ]
  },
  {
    id: 101,
    title: 'Stream API (java.util.stream)',
    slug: 'stream-api',
    block: 'APIS',
    orderIndex: 2,
    description: 'Secuencia de elementos que soporta operaciones intermedias (transformación) y terminales (consumo). No modifica la fuente original. Lazy evaluation: solo se ejecutan cuando hay operación terminal.',
    codeExample: `// Creación
List<String> list = List.of("a", "b", "c");
Stream<String> s1 = list.stream();
Stream<String> s2 = Stream.of("a", "b", "c");

// Operaciones intermedias
stream.filter(predicate)
stream.map(function)
stream.flatMap(mapper)
stream.distinct()
stream.sorted()
stream.limit(n)
stream.skip(n)

// Chaining
list.stream()
    .filter(s -> s.length() > 1)
    .map(String::toUpperCase)
    .distinct()
    .sorted();

// Operaciones terminals
stream.collect(Collectors.toList())
stream.reduce(identity, accumulator)
stream.count()
stream.forEach(action)`,
    questions: [
      { question: 'Stream vs Collection?', answer: 'Collection es una estructura de datos en memoria. Stream no almacena elementos, procesa bajo demanda. Stream es consumible (una vez recorrido, se cierra).' },
      { question: 'collect vs reduce?', answer: 'collect usa Collectors para acumular en estructuras mutable (StringBuilder, List, etc). reduce es para operaciones algebraicas (suma, producto). collect es más flexible y performante.' }
    ],
    subConcepts: [
      {
        title: 'Operaciones terminales',
        slug: 'stream-terminal',
        orderIndex: 2,
        description: 'Operaciones que producen resultado final.',
        codeExample: `// collectors
stream.collect(Collectors.toList())
stream.collect(Collectors.toSet())
stream.collect(Collectors.toMap(keyMapper, valueMapper))
stream.collect(Collectors.groupingBy(classifier))
stream.collect(Collectors.partitioningBy(predicate))
stream.collect(Collectors.joining(", "))

// reducción
stream.reduce(identity, accumulator)
stream.count()
stream.findFirst()  // Optional
stream.anyMatch(predicate)
stream.allMatch(predicate)
stream.noneMatch(predicate)`,
        questions: [
          { question: '¿collect vs reduce?', answer: 'collect usa Collectors para acumular en estructuras mutable. reduce es para operaciones algebraicas. collect es más flexible y performante para la mayoría de casos.' }
        ]
      }
    ]
  },
  {
    id: 102,
    title: 'java.util.function',
    slug: 'java-util-function',
    block: 'APIS',
    orderIndex: 3,
    description: 'Functional interfaces predefinidas para lambdas y method references. Cubren los casos más comunes: función, consumidor, proveedor, predicado.',
    codeExample: `// Function<T,R> - transforma T en R
Function<String, Integer> length = String::length;
length.apply("hola");  // 4

// Consumer<T> - consume sin devolver
Consumer<String> printer = System.out::println;
printer.accept("hola");

// Supplier<T> - provee T
Supplier<LocalDate> ahora = LocalDate::now;
ahora.get();

// Predicate<T> - test boolean
Predicate<String> noVacia = s -> !s.isEmpty();
noVacia.test("hola");  // true

// Compose
Function<String, String> f1 = String::toUpperCase;
Function<String, String> combined = f1.andThen(s -> s + "!");`,
    questions: [
      { question: 'Function vs Consumer vs Supplier vs Predicate?', answer: 'Function<T,R>: T -> R (transforma). Consumer<T>: T -> void (consume). Supplier<T>: () -> T (produce). Predicate<T>: T -> boolean (testea).' },
      { question: 'andThen vs compose?', answer: 'andThen: a.andThen(b) aplica a primero, luego b sobre el resultado. compose: a.compose(b) aplica b primero, luego a sobre el resultado.' }
    ],
    subConcepts: []
  },
  {
    id: 103,
    title: 'JDBC API',
    slug: 'jdbc-api',
    block: 'APIS',
    orderIndex: 4,
    description: 'Java Database Connectivity. API estándar para acceder a bases de datos relacionales. DriverManager obtiene conexiones. Connection, Statement, PreparedStatement, ResultSet son las clases principales.',
    codeExample: `String url = "jdbc:postgresql://localhost:5432/mydb";

try (Connection conn = DriverManager.getConnection(url, user, pass);
     Statement stmt = conn.createStatement();
     ResultSet rs = stmt.executeQuery("SELECT id, name FROM users")) {

    while (rs.next()) {
        int id = rs.getInt("id");
        String name = rs.getString("name");
    }
}

// PreparedStatement
String sql = "INSERT INTO users (name, email) VALUES (?, ?)";
try (PreparedStatement ps = conn.prepareStatement(sql,
        Statement.RETURN_GENERATED_KEYS)) {
    ps.setString(1, name);
    ps.setInt(2, rows);
}`,
    questions: [
      { question: 'Statement vs PreparedStatement?', answer: 'Statement: queries estáticos, riesgo SQL injection. PreparedStatement: precompilado, parámetros, mejor performance en queries repetidos, previene SQL injection.' },
      { question: '¿Por qué try-with-resources?', answer: 'Automáticamente cierra Connection, Statement, ResultSet aunque haya excepciones. Previene resource leaks.' }
    ],
    subConcepts: [
      {
        title: 'Transacciones',
        slug: 'jdbc-ps-transactions',
        orderIndex: 2,
        description: 'Control transaccional manual.',
        codeExample: `conn.setAutoCommit(false);
try {
    stmt.executeUpdate("INSERT INTO accounts...");
    stmt.executeUpdate("UPDATE logs...");
    conn.commit();
} catch (Exception e) {
    conn.rollback();
} finally {
    conn.setAutoCommit(true);
}`,
        questions: [
          { question: '¿setAutoCommit(false)?', answer: 'Por defecto cada statement es su propia transacción. setAutoCommit(false) permite agrupar múltiples operaciones en una transacción atómica.' }
        ]
      }
    ]
  },
  {
    id: 104,
    title: 'Java NIO',
    slug: 'java-nio',
    block: 'APIS',
    orderIndex: 5,
    description: 'New I/O. Buffers, Channels, Selectors para I/O no bloqueante y eficiente. Principal para servidores de alta concurrencia.',
    codeExample: `import java.nio.file.*;

// Path (reemplaza File)
Path p = Paths.get("folder", "file.txt");
Path absolute = p.toAbsolutePath();

// Files utilitarios
String content = Files.readString(p);
Files.writeString(p, "text");
List<String> lines = Files.readAllLines(p);

Files.copy(src, dest);
Files.move(src, dest);
Files.delete(p);
boolean exists = Files.exists(p);

// Buffer (para NIO Channels)
ByteBuffer buffer = ByteBuffer.allocate(1024);
buffer.putInt(42);
buffer.flip();  // prepara para lectura`,
    questions: [
      { question: 'NIO vs java.io tradicional?', answer: 'java.io: stream-oriented, bloqueante. NIO: buffer-oriented, puede ser no bloqueante (Selectors). NIO es mejor para muchos conexiones simultáneas.' }
    ],
    subConcepts: [
      {
        title: 'FileVisitor y WatchService',
        slug: 'nio-visitor-watch',
        orderIndex: 2,
        description: 'Recorrido recursivo y monitoring de archivos.',
        codeExample: `// Recorrer árbol de directorios
Files.walkFileTree(path, new SimpleFileVisitor<>() {
    @Override
    public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) {
        System.out.println(file);
        return FileVisitResult.CONTINUE;
    }
});

// WatchService - monitoring cambios
WatchService watcher = FileSystems.getDefault().newWatchService();
path.register(watcher, ENTRY_CREATE, ENTRY_MODIFY, ENTRY_DELETE);

while (true) {
    WatchKey key = watcher.take();
    for (WatchEvent<?> event : key.pollEvents()) {
        System.out.println(event.kind() + ": " + event.context());
    }
    key.reset();
}`,
        questions: [
          { question: '¿WalkFileTree vs Files.walk()?', answer: 'walk() devuelve Stream<Path> (más conciso para casos simples). walkFileTree() con FileVisitor da más control sobre cada paso del recorrido.' }
        ]
      }
    ]
  },
  {
    id: 105,
    title: 'HttpClient API (Java 11+)',
    slug: 'http-client-api',
    block: 'APIS',
    orderIndex: 6,
    description: 'Cliente HTTP moderno, síncrono y asíncrono. Reemplaza HttpURLConnection y RestTemplate para uso directo (no Spring).',
    codeExample: `HttpClient client = HttpClient.newHttpClient();

// GET
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.example.com/users/1"))
    .header("Accept", "application/json")
    .GET()
    .build();

HttpResponse<String> response = client.send(request,
    HttpResponse.BodyHandlers.ofString());

// POST
HttpRequest postReq = HttpRequest.newBuilder()
    .uri(URI.create("https://api.example.com/users"))
    .header("Content-Type", "application/json")
    .POST(HttpRequest.BodyPublishers.ofString(
        "{\"name\": \"Ana\"}"))
    .build();`,
    questions: [
      { question: 'HttpClient vs RestTemplate?', answer: 'RestTemplate es blocking. HttpClient puede ser sync o async. HttpClient es el cliente HTTP nativo de Java moderno.' },
      { question: '¿send vs sendAsync?', answer: 'send() es blocking (síncrono). sendAsync() devuelve CompletableFuture<HttpResponse> y es no-blocking. Usar sendAsync() para concurrencia alta.' }
    ],
    subConcepts: [
      {
        title: 'Async',
        slug: 'httpclient-async',
        orderIndex: 2,
        description: 'Requests asíncronos con CompletableFuture.',
        codeExample: `// Async con CompletableFuture
CompletableFuture<HttpResponse<String>> future =
    client.sendAsync(request, HttpResponse.BodyHandlers.ofString());

future.thenApply(HttpResponse::body)
      .thenAccept(System.out::println);

// Esperar resultado
String result = future.join();

// Manejo de errores
future.exceptionally(ex -> {
    System.err.println("Error: " + ex.getMessage());
    return null;
});`,
        questions: [
          { question: '¿send vs sendAsync?', answer: 'send() es blocking (síncrono). sendAsync() devuelve CompletableFuture<HttpResponse> y es no-blocking.' }
        ]
      }
    ]
  },
  // ==========================================
  // SPRING
  // ==========================================
  {
    id: 200,
    title: 'Spring Framework',
    slug: 'spring-framework',
    block: 'SPRING',
    orderIndex: 1,
    description: 'Framework de aplicación enterprise para Java. Inversión de Control (IoC), Dependency Injection (DI), Aspect-Oriented Programming (AOP). Componentes core: BeanFactory, ApplicationContext, Bean, Dependency Injection.',
    codeExample: null,
    questions: [
      { question: '¿Qué es Spring?', answer: 'Framework de aplicación enterprise para Java que proporciona infraestructura y abstracciones. Core: IoC/DI. Soporta enterprise features: transactions, security, data access, web, etc.' },
      { question: '¿IoC vs DI?', answer: 'IoC (Inversión de Control): el framework controla el flujo de la aplicación. DI (Inyección de Dependencias): el framework inyecta dependencias en vez de que las clases las creen. DI es la implementación principal de IoC.' }
    ],
    subConcepts: []
  },
  {
    id: 201,
    title: 'IoC Container',
    slug: 'ioc-container',
    block: 'SPRING',
    orderIndex: 2,
    description: 'Contenedor que maneja el ciclo de vida de los beans. BeanFactory (básico) vs ApplicationContext (enterprise). Configuración: XML, Annotations (@Component, @Bean), Java Config (@Configuration).',
    codeExample: `@Component  // registra como bean
public class MiServicio {
    @Autowired  // inyección por tipo
    private MiRepositorio repositorio;
}

@Configuration
public class AppConfig {
    @Bean  // método que devuelve bean
    public MiServicio miServicio() {
        return new MiServicio();
    }
}

// ApplicationContext escanea y crea
ApplicationContext ctx = new AnnotationConfigApplicationContext(AppConfig.class);
MiServicio servicio = ctx.getBean(MiServicio.class);`,
    questions: [
      { question: '¿Component scan?', answer: '@ComponentScan en @Configuration indica dónde buscar @Component. Por defecto busca en el paquete de la clase configuradora y subpaquetes.' },
      { question: '¿Singleton por defecto?', answer: 'Sí, los beans son singleton por defecto. Cada bean se crea una vez y se comparte. @Scope("prototype") crea nueva instancia cada vez que se pide.' }
    ],
    subConcepts: []
  },
  // ==========================================
  // TOOLS
  // ==========================================
  {
    id: 300,
    title: 'Git',
    slug: 'git',
    block: 'TOOLS',
    orderIndex: 2,
    description: 'Sistema de control de versiones distribuido. Gestiona cambios en código fuente. Comandos principales: init, clone, add, commit, push, pull, branch, merge, rebase, stash.',
    codeExample: `# Init y clone
git init
git clone https://github.com/user/repo.git

# Working directory -> Staging -> Repository
git add archivo.txt        # stage
git commit -m "mensaje"   # commit
git push origin main       # push

# Ramas
git branch feature        # crear rama
git checkout feature      # cambiar a rama
git checkout -b feature   # crear y cambiar
git merge feature        # fusionar rama
git rebase main          # rebase

# Sincronización
git pull origin main      # fetch + merge
git fetch origin         # solo descargar
git rebase main          # rebase sobre main`,
    questions: [
      { question: '¿Merge vs Rebase?', answer: 'Merge: une ramas preservando historia, puede crear merge commits. Rebase: reescribe historia aplicando commits linealmente. Rebase más limpio, pero no usar en ramas públicas.' },
      { question: '¿Reset vs Revert?', answer: 'Reset: deshace commits moviendo HEAD hacia atrás (--soft, --mixed, --hard). Revert: crea commit nuevo que deshace cambios de un commit anterior. Más seguro para ramas compartidas.' }
    ],
    subConcepts: []
  },
  {
    id: 301,
    title: 'Docker',
    slug: 'docker',
    block: 'TOOLS',
    orderIndex: 3,
    description: 'Plataforma de contenedores. Contenedor = proceso aislado con su propio filesystem. Imagen = plantilla inmutable para crear contenedores. Dockerfile define imagen. docker-compose orchestration de múltiples contenedores.',
    codeExample: `# Dockerfile
FROM openjdk:21-slim
WORKDIR /app
COPY target/app.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]

# Build y run
docker build -t mi-app:latest .
docker run -p 8080:8080 mi-app:latest
docker run -d --name mi-app mi-app:latest

# Docker Compose
version: '3'
services:
  app:
    build: .
    ports:
      - "8080:8080"
  db:
    image: postgres:15
    environment:
      POSTGRES_PASSWORD: secret`,
    questions: [
      { question: '¿Container vs VM?', answer: 'Container: aislamiento a nivel de proceso, comparte kernel del host, start en segundos. VM: aislamiento a nivel de sistema operativo completo, start en minutos. Containers más ligeros y rápidos.' },
      { question: '¿Dockerfile best practices?', answer: '1) Usar imágenes base mínimas (alpine/slim). 2) Multi-stage builds para reducir tamaño. 3) Orden de instrucciones que cambia menos al final. 4) No correr como root. 5) Usar .dockerignore.' }
    ],
    subConcepts: []
  },
  {
    id: 302,
    title: 'SQL',
    slug: 'sql',
    block: 'TOOLS',
    orderIndex: 4,
    description: 'Structured Query Language. Lenguaje para gestionar bases de datos relacionales. Principales: SELECT, INSERT, UPDATE, DELETE. JOINs para combinar tablas. Aggregate functions: COUNT, SUM, AVG, MAX, MIN. Group by, Having, Order by.',
    codeExample: `-- SELECT básico
SELECT id, name, email FROM users WHERE active = true;

-- JOINs
SELECT u.name, o.total
FROM users u
INNER JOIN orders o ON u.id = o.user_id
WHERE o.total > 100;

-- Aggregation
SELECT department, COUNT(*) as total, AVG(salary) as avg_salary
FROM employees
GROUP BY department
HAVING AVG(salary) > 3000
ORDER BY avg_salary DESC;

-- Subquery
SELECT name FROM users WHERE id IN (
    SELECT user_id FROM orders WHERE total > 1000
);`,
    questions: [
      { question: 'INNER JOIN vs LEFT JOIN?', answer: 'INNER: solo filas con match en ambas tablas. LEFT: todas las filas de la izquierda, NULLs para la derecha si no hay match.' },
      { question: '¿Qué es normalize?', answer: 'Proceso de organizar datos para reducir redundancia. Formas normales: 1NF (atómicos), 2NF (no partial dependencies), 3NF (no transitive dependencies).' }
    ],
    subConcepts: []
  },
  {
    id: 303,
    title: 'Maven',
    slug: 'maven',
    block: 'TOOLS',
    orderIndex: 1,
    description: 'Herramienta de build y gestión de dependencias para proyectos Java. pom.xml define proyecto. Lifecycle: clean, compile, test, package, install, deploy. Goals ejecutados por plugins.',
    codeExample: `<!-- pom.xml básico -->
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.ejemplo</groupId>
    <artifactId>mi-app</artifactId>
    <version>1.0.0</version>
    <packaging>jar</packaging>

    <properties>
        <java.version>21</java.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
</project>`,
    questions: [
      { question: '¿Maven vs Gradle?', answer: 'Maven: XML declarativo, más estándar, strukturado. Gradle: scripts programáticos (Groovy/Kotlin DSL), mejor rendimiento con build cache y task incremental.' },
      { question: '¿Lombok?', answer: 'Librería que genera bytecode para getters/setters/constructors via anotaciones. @Data, @Getter, @Setter, @Builder, @NoArgsConstructor, @AllArgsConstructor.' }
    ],
    subConcepts: []
  }
];

export function getConceptsByBlock(block: string): Concept[] {
  return concepts.filter(c => c.block === block).sort((a, b) => a.orderIndex - b.orderIndex);
}

export function getConceptBySlug(slug: string): Concept | undefined {
  return concepts.find(c => c.slug === slug);
}

export function getAllSlugs(): string[] {
  return concepts.map(c => c.slug);
}
