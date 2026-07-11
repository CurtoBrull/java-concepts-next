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
    id: 50,
    title: 'Sintaxis y Tipos de Datos',
    slug: 'sintaxis-tipos-datos',
    block: 'JAVA_CORE',
    orderIndex: 50,
    description: 'Java es fuertemente tipado y statico. Tipos primitivos (8): byte, short, int, long, float, double, char, boolean. Tipos referencia: clases, interfaces, arrays, null. Wrapper classes (Integer, Double, etc) para usar primitivos como objetos. Autoboxing/unboxing automatico.',
    codeExample: `// Tipos primitivos
int entero = 42;        // 4 bytes
long largo = 42L;       // 8 bytes
double decimal = 3.14;  // 8 bytes
float flotante = 3.14f; // 4 bytes
char caracter = 'A';    // 2 bytes (Unicode)
boolean flag = true;    // 1 byte (JVM-dependent)

// Tipos referencia
String texto = "Hola";
int[] array = {1, 2, 3};
Persona p = new Persona();

// Wrappers (clases para primitivos)
Integer enteroObj = Integer.valueOf(42);  //boxing
int primitivo = enteroObj;               //unboxing automatico

// var (Java 10+) - infiere tipo en variables locales
var nombre = "Ana";   // String
var lista = new ArrayList<String>();  // ArrayList<String>

// Literales
int binario = 0b1010;    // 10
int octal = 012;         // 10
int hex = 0xA;           // 10
long underscore = 1_000_000;  // guion bajo para legibilidad

// Conversiones
int a = 10;
double b = a;     // implicita (widening)
int c = (int) b;  // explicita (narrowing)`,
    questions: [
      { question: 'Tipos primitivos vs referencia?', answer: 'Primitivos: guardan el valor directamente en stack, 8 tipos (byte, short, int, long, float, double, char, boolean). Referencia: guardan direccion de memoria en stack, objeto en heap. Primitivos pasan por valor; referencias pasan por valor de la referencia (modifican el objeto compartido).' },
      { question: 'Autoboxing/Unboxing?', answer: 'Autoboxing: conversion automatica de primitivo a wrapper (int -> Integer). Unboxing: wrapper a primitivo (Integer -> int). Sucede en asignacion, paso de parametros, generics. Cuidado: Integer cache entre -128 y 127; == puede fallar fuera de ese rango.' },
      { question: 'var (Java 10+)?', answer: 'Type inference para variables locales. var nombre = "Ana"; infiere String. Solo en variables locales con inicializacion, no en campos, parametros, ni returns. Mejora legibilidad en tipos largos pero no abusar.' }
    ],
    subConcepts: []
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
    id: 55,
    title: 'Abstraccion',
    slug: 'abstraccion',
    block: 'JAVA_CORE',
    orderIndex: 55,
    description: 'Abstraccion: capturar solo lo esencial de un objeto, ignorando detalles irrelevantes. Se logra con clases abstractas e interfaces. Reduce complejidad: el usuario de la clase no necesita conocer su implementacion, solo su contrato (que hace, no como). Junto con herencia, polimorfismo y encapsulamiento forma los 4 pilares de la POO.',
    codeExample: `// Clase abstracta: define contrato + implementacion parcial
public abstract class Figura {
    // Metodo abstracto: cada subclase debe implementar
    public abstract double area();

    // Metodo concreto: implementacion compartida
    public String descripcion() {
        return "Figura con area = " + area();
    }
}

// Interface: contrato puro (que hace, no como)
public interface Dibujable {
    void dibujar();
}

// Implementacion concreta
public class Circulo extends Figura implements Dibujable {
    private double radio;

    public Circulo(double radio) { this.radio = radio; }

    @Override
    public double area() { return Math.PI * radio * radio; }

    @Override
    public void dibujar() { System.out.println("Dibujando circulo"); }
}

// Uso: el usuario no sabe como se calcula area
Figura f = new Circulo(5);
f.area();        // instancia
f.descripcion(); // implementacion compartida`,
    questions: [
      { question: 'Abstraccion vs Encapsulamiento?', answer: 'Abstraccion: que hace un objeto (contrato, interface). Encapsulamiento: como ocultas su estado interno. Abstraccion usa clases abstractas/interfaces; Encapsulamiento usa private/getters/setters. Son complementarios: abstraccion define la forma, encapsulamiento protege el contenido.' },
      { question: 'Clase abstracta vs Interface para abstraccion?', answer: 'Clase abstracta: si hay estado compartido o implementacion reutilizable. Interface: si solo necesario un contrato. Java 8+ permite default methods, pero interfaces no tienen estado. Prioriza interface: mas flexible (herencia multiple de tipo).' },
      { question: 'Como logra la abstraccion reducir complejidad?', answer: 'El usuario de la clase solo necesita conocer el contrato (metodos publicos), no el detalle interno. Permite cambiar la implementacion sin romper el codigo que la usa. Ej: reemplazar Circulo por Cuadrado sin tocar el resto.' }
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
    id: 56,
    title: 'Excepciones',
    slug: 'excepciones',
    block: 'JAVA_CORE',
    orderIndex: 56,
    description: 'Las excepciones son el mecanismo de Java para manejar situaciones excepcionales (errores) durante la ejecucion de un programa. Cuando algo falla, Java crea un objeto Exception con informacion del error (mensaje, causa, stack trace) y lo lanza (throw). El codigo que lo maneja lo captura (catch). Si nadie lo captura, el programa termina con el stack trace. Entender excepciones es clave para escribir codigo robusto que no se rompa ante entradas invalidas, archivos faltantes, conexiones caidas o bugs inesperados.',
    codeExample: `// Ejemplo simple: que pasa sin manejo de excepciones
String texto = null;
System.out.println(texto.length());
// Exception in thread "main" java.lang.NullPointerException
//     at MiApp.main(MiApp.java:3)
// El programa TERMINA. No hay recovery.

// Con manejo: el programa sigue
String texto = null;
try {
    System.out.println(texto.length());
} catch (NullPointerException e) {
    System.out.println("El texto era null, uso default");
    texto = "default";
    System.out.println(texto.length());  // 7
}
// El programa sigue ejecutando

// throw explicito: el que detecta el problema lo lanza
public void setEdad(int edad) {
    if (edad < 0) {
        throw new IllegalArgumentException("Edad no puede ser negativa: " + edad);
    }
    this.edad = edad;
}`,
    questions: [
      { question: 'Que es una excepcion y por que es importante?', answer: 'Una excepcion es un objeto que representa un fallo durante la ejecucion. Java la lanza (throw) automaticamente al detectar un error (dividir por cero, acceder a null, archivo no existe) o tu la lanzas explicitamente con throw new MiException. Sin manejo, el programa termina. Con manejo (try-catch), el programa puede recover y seguir. Es clave para robustez: el codigo no debe caer ante entradas o situaciones inesperadas.' },
      { question: 'Que informacion tiene un objeto Exception?', answer: '1) Mensaje descriptivo (getMessage): "Archivo no encontrado: datos.txt". 2) Causa original (getCause): la excepcion que provoco esta, para chains. 3) Stack trace (getStackTrace): array con cada metodo en el call stack, clase, archivo y linea donde se produjo. Utisimo para debugging. 4) Excepciones suppressed (getSuppressed): para try-with-resources.' },
      { question: ' throw vs throws?', answer: 'throw: lanza una instancia de excepcion (throw new MiException("msg")). throws: declara en la firma del metodo que puede lanzar una checked exception (void metodo() throws IOException). throws es una advertencia para quien llama; throw es la accion de lanzar.' }
    ],
    subConcepts: [
      {
        title: 'Jerarquia: Throwable, Error, Exception, RuntimeException',
        slug: 'excepciones-jerarquia',
        orderIndex: 1,
        description: 'Toda excepcion hereda de Throwable. Se divide en Error (fallos graves de la JVM, no se deben manejar) y Exception (errores de aplicacion, si se manejan). Exception se subdivide en checked (compilador exige try/catch o throws) y unchecked/Runtime (opcionales, programador decide). Conocer la jerarquia es clave para elegir el tipo correcto.',
        codeExample: `// JERARQUIA COMPLETA
//
// Throwable
//   |
//   +-- Error                          // NO manejar. JVM rota
//   |     +-- OutOfMemoryError         // sin memoria
//   |     +-- StackOverflowError      // recursion infinita
//   |     +-- NoClassDefFoundError     // clase no encontrada
//   |
//   +-- Exception                      // SI manejar
//         |
//         +-- CHECKED (compilador exige try/catch o throws)
//         |     +-- IOException
//         |     +-- SQLException
//         |     +-- ClassNotFoundException
//         |     +-- InterruptedException
//         |
//         +-- UNCHECKED (extends RuntimeException, no obligatorio)
//               +-- NullPointerException
//               +-- ArrayIndexOutOfBoundsException
//               +-- IllegalArgumentException
//               +-- IllegalStateException
//               +-- ArithmeticException          // dividir por cero
//               +-- ClassCastException
//               +-- NumberFormatException       // Integer.parseInt("abc")

// Error: no intentar recuperar, algo grave paso
try {
    int[] huge = new int[Integer.MAX_VALUE];
} catch (OutOfMemoryError e) {
    // NO recomendado. Mejor dejar que JVM termine
    // no hay recovery posible
}

// Checked: el compilador TE FUERZA a manejar
public void leerArchivo(String path) throws IOException {
    FileReader reader = new FileReader(path);  // checked!
    // si no pones try/catch o throws, NO COMPILA
}

// Unchecked: el compilador no te obliga
public void processar(String texto) {
    System.out.println(texto.length());  // NPE posible, compilador no avisa
}`,
        questions: [
          { question: 'Por que Error no se debe manejar?', answer: 'Error indica fallo grave de la JVM (OutOfMemoryError, StackOverflowError). Recover normalmente es imposible: si no hay memoria, ni siquiera puedes allocar el handler. Mejor dejar que JVM termine y revisar el log para investigar la causa raiz.' },
          { question: 'Por que existen checked exceptions?', answer: 'Para forzar al programador a pensar en casos de error y manejarlos explicitamente. Ej: abrir archivo puede fallar (IOException). El compilador te obliga a decidir: catch, declarar throws, o propagar. Reduce bugs donde se olvida manejar fallos. Critico: no abusar checked para errores de programacion (esos son unchecked).' },
          { question: 'Checked vs Unchecked cuando crear custom?', answer: 'Checked (extends Exception): cuando el caller puede recover (archivo no existe -> pedir otro). Unchecked (extends RuntimeException): cuando el error indica bug de programacion (edad negativa, estado invalido) que no deberia capturarse sino corregirse.' }
        ]
      },
      {
        title: 'try-catch-finally: capturar y limpiar',
        slug: 'excepciones-try-catch-finally',
        orderIndex: 2,
        description: 'try contiene el codigo que puede fallar. catch captura excepciones de tipos especificos. finally se ejecuta siempre (haya o no excepcion), util para limpiar recursos. Se puede tener try-catch, try-finally, o ambos. Multiples catch van de mas especifico a mas general.',
        codeExample: `// try-catch basico
try {
    int resultado = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Error aritmetico: " + e.getMessage());
}

// multiples catch: orden de especifico a general
try {
    FileReader reader = new FileReader("datos.txt");
    int dato = reader.read();
} catch (FileNotFoundException e) {
    // mas especifico primero
    System.out.println("Archivo no existe: " + e.getMessage());
} catch (IOException e) {
    // mas general despues
    System.out.println("Error de lectura: " + e.getMessage());
}

// finally: limpieza garantizada
FileReader reader = null;
try {
    reader = new FileReader("datos.txt");
    // usar reader
} catch (IOException e) {
    System.out.println("Error: " + e.getMessage());
} finally {
    // Esto se ejecuta SIEMPRE: con exito, error, return o break
    if (reader != null) {
        try {
            reader.close();  // close() tambien puede lanzar IOException
        } catch (IOException e) {
            // ignorar error de cierre
        }
    }
}

// finally con return: finally gana
public int ejemplo() {
    try {
        return 1;
    } finally {
        System.out.println("Esto se ejecuta antes del return");
        // si aqui hay return 2, gana el 2
    }
}
// imprime mensaje y devuelve 1 (o 2 si finally tiene return)`,
        questions: [
          { question: 'Por que el orden de catch importa?', answer: 'Java evalua los catch de arriba hacia abajo. El primero que matchea (isinstance) captura. Si pones catch (Exception) antes de catch (FileNotFoundException), el especifico nunca se ejecuta. Regla: siempre de subclase a superclase.' },
          { question: 'finally puede no ejecutarse?', answer: 'Solo en casos extremos: System.exit(), interrupcion brutal (kill -9 JVM), o si el hilo es interrumpido antes de entrar al finally. En casos normales (incluso return, break, continue), finally se ejecuta.' },
          { question: 'Esta bien usar finally para return?', answer: 'NO. Si finally tiene return, sobrescribe cualquier return del try y silencia excepciones no capturadas. Es una mala practica: dificil de debuggear. finally solo para cleanup, nunca para logica de control flow.' }
        ]
      },
      {
        title: 'try-with-resources (Java 7+)',
        slug: 'excepciones-try-with-resources',
        orderIndex: 3,
        description: 'Sintaxis moderna para gestionar recursos que implementan AutoCloseable (InputStream, OutputStream, Reader, Connection, etc). El recurso se cierra automaticamente al salir del bloque, sin necesidad de finally. Mas conciso y seguro: elimina codigo boilerplate y previene resource leaks.',
        codeExample: `// ANTES (Java 6): verbose y propenso a leaks
BufferedReader br = null;
try {
    br = new BufferedReader(new FileReader("datos.txt"));
    String linea = br.readLine();
} catch (IOException e) {
    e.printStackTrace();
} finally {
    try {
        if (br != null) br.close();
    } catch (IOException e) {
        e.printStackTrace();
    }
}

// AHORA (Java 7+): try-with-resources
try (BufferedReader br = new BufferedReader(new FileReader("datos.txt"))) {
    String linea = br.readLine();
} catch (IOException e) {
    e.printStackTrace();
}
// br.close() se llama automaticamente, sin finally

// Multiples recursos: se cierran en orden INVERSO
try (FileReader fr = new FileReader("datos.txt");
     BufferedReader br = new BufferedReader(fr)) {
    String linea = br.readLine();
} catch (IOException e) {
    e.printStackTrace();
}
// Orden de cierre: br primero, fr despues (ultimo declarado, primero cerrado)

// Tu propia clase AutoCloseable
public class MiRecurso implements AutoCloseable {
    private final String nombre;

    public MiRecurso(String nombre) {
        this.nombre = nombre;
        System.out.println("Abriendo: " + nombre);
    }

    @Override
    public void close() throws Exception {
        System.out.println("Cerrando: " + nombre);
    }
}

// Uso
try (MiRecurso r1 = new MiRecurso("A");
     MiRecurso r2 = new MiRecurso("B")) {
    System.out.println("Usando recursos");
} catch (Exception e) {
    e.printStackTrace();
}
// Output:
// Abriendo: A
// Abriendo: B
// Usando recursos
// Cerrando: B
// Cerrando: A`,
        questions: [
          { question: 'Que es AutoCloseable?', answer: 'Interfaz funcional con un metodo close() throws Exception. Cualquier clase que la implemente puede usarse en try-with-resources. java.io y java.sql ya lo implementan (InputStream, Connection, ResultSet, etc). close() se llama automaticamente al salir del bloque.' },
          { question: 'Por que se cierran en orden inverso?', answer: 'Si el recurso B depende del A (BufferedReader usa FileReader), cerrar A primero haria que B fallase. Java cierra en orden inverso de declaracion: ultimo declarado (B) se cierra primero. Garantiza que dependencias se cierren antes que sus proveedores.' },
          { question: 'Que pasa si close() falla?', answer: 'Si el try se ejecuto bien pero close() lanza excepcion, esa excepcion se propaga. Si el try tambien fallo, la excepcion original se mantiene y la de close() se anade como suppressed (getSuppressed()). Java prioriza el error original para debugging.' }
        ]
      },
      {
        title: 'Propagacion y throws',
        slug: 'excepciones-propagacion',
        orderIndex: 4,
        description: 'Una excepcion puede propagarse hacia arriba en el call stack si el metodo no la captura. Para checked, hay que declarar throws en la firma. Para unchecked, se propagan automaticamente. Este mecanismo permite separar deteccion (donde se detecta el error) de manejo (donde se decide que hacer).',
        codeExample: `// Propagacion natural: no capturas, sube al caller
public void metodoA() {
    metodoB();  // no captura, sube al caller de metodoA
}

public void metodoB() {
    metodoC();  // si metodoC lanza, sube a metodoA
}

public void metodoC() {
    throw new RuntimeException("Algo fallo");
}
// Stack trace mostrara: metodoC -> metodoB -> metodoA -> main

// Checked: el compilador exige throws en la firma
public void leerArchivo(String path) throws IOException {
    FileReader reader = new FileReader(path);  // IOException es checked
    // si no capturas y no declaras throws, NO COMPILA
}

// El caller decide: capturar o seguir propagando
public void procesarDatos() throws IOException {
    leerArchivo("datos.txt");  // sigue propagando
}

public void main() {
    try {
        procesarDatos();
    } catch (IOException e) {
        System.out.println("No se pudo leer: " + e.getMessage());
    }
}

// Cadena de excepciones: causa original + wrap
public void cargarConfig() throws ConfigException {
    try {
        FileReader reader = new FileReader("config.properties");
    } catch (IOException e) {
        // wrap: la original como causa, nueva mas semantica
        throw new ConfigException("Config invalida", e);
    }
}
// el usuario hace: e.getCause() para ver la IOException original`,
        questions: [
          { question: 'Cuando propagar vs cuando capturar?', answer: 'Captura cuando puedes recover (archivo no existe -> usar default). Propaga cuando no tienes info suficiente para decidir (capa DAO no sabe si archivo faltante es fatal, dejalo subir al service/controller). En capas altas (controller), captura y devuelve error HTTP al cliente.' },
          { question: 'Que es exception chaining (wrap)?', answer: 'Cuando al capturar una excepcion lanzas otra mas semantica, pasando la original como causa: throw new MiException("Mensaje claro", e). La nueva describe el problema en terminos de la capa actual, pero conservas la causa original accesible con getCause(). Mejora debugging sin perder informacion.' },
          { question: 'Por que no capturar Exception generica?', answer: 'catch (Exception e) captura TODO, incluidas RuntimeException que no esperabas (bugs). Enmascara errores de programacion. Mejor capturar especifico (IOException) y dejar que RuntimeException suba para que el bug salga a la luz. Si capturas generico, al menos rethrow despues de loguear.' }
        ]
      },
      {
        title: 'Excepciones Custom',
        slug: 'excepciones-custom',
        orderIndex: 5,
        description: 'Crear tus propias excepciones para expresar errores especificos del dominio. Checked (extends Exception) para errores recuperables. Unchecked (extends RuntimeException) para bugs de programacion. Buenos nombres terminan en Exception. Incluyen mensaje claro y opcionalmente codigo de error, causa y datos extra.',
        codeExample: `// CHECKED: error recuperable, el caller debe manejar
public class ConfigNotFoundException extends Exception {
    private final String configName;

    public ConfigNotFoundException(String configName) {
        super("Configuracion no encontrada: " + configName);
        this.configName = configName;
    }

    public ConfigNotFoundException(String configName, Throwable cause) {
        super("Configuracion no encontrada: " + configName, cause);
        this.configName = configName;
    }

    public String getConfigName() { return configName; }
}

// UNCHECKED: bug de programacion, no se deberia capturar
public class InvalidEmailException extends RuntimeException {
    public InvalidEmailException(String email) {
        super("Email invalido: " + email);
    }
}

// Uso en el dominio
public class UserService {
    private final ConfigLoader loader;

    public void loadConfig() throws ConfigNotFoundException {
        if (!loader.exists("app.config")) {
            throw new ConfigNotFoundException("app.config");
        }
        // ...
    }

    public void setEmail(String email) {
        if (!email.contains("@")) {
            throw new InvalidEmailException(email);  // bug del caller
        }
        this.email = email;
    }
}

// Usar excepciones con jerarquia para tu dominio
public class DomainException extends Exception {}
public class UserNotFoundException extends DomainException {}
public class InvalidUserDataException extends DomainException {}
// caller puede: catch (DomainException e) para todas o especifico`,
        questions: [
          { question: 'Cuando crear una excepcion custom?', answer: 'Cuando las del JDK no describen bien tu problema de dominio. "FileNotFoundException" no dice nada de tu dominio; "UsuarioNoEncontradoException" si. Crea una custom cuando el error tiene significado especifico y quieres handlers diferenciados por tipo.' },
          { question: 'Checked o Unchecked para custom?', answer: 'Checked (extends Exception): errores recuperables, el caller puede hacer algo (pedir otro archivo). Unchecked (extends RuntimeException): bugs de programacion o invariantes violados (edad negativa, email mal formado). No se deberian capturar, sino corregir. Tendencia moderna: preferir unchecked.' }
        ]
      },
      {
        title: 'Buenas practicas',
        slug: 'excepciones-buenas-practicas',
        orderIndex: 6,
        description: 'Consejos para usar excepciones correctamente y no convertir tu codigo en una pesadilla de debuggear. Evitamos capturar generico, no ignorar excepciones, no usar excepciones para control flow, y always log con contexto.',
        codeExample: `// MAL: capturar y tragar
try {
    hacerAlgo();
} catch (Exception e) {
    // VACIO: el error se pierde, imposible debuggear
}

// MAL: capturar generico
try {
    cargarUsuario();
    enviarEmail();
} catch (Exception e) {
    // captura TODO: NullPointerException bugs incluidos
    log.error("Error", e);
}

// BIEN: capturar especifico
try {
    cargarUsuario();
} catch (SQLException e) {
    log.error("Error cargando usuario", e);
    throw new ServiceException("No se pudo cargar usuario", e);
}

// MAL: usar excepciones para control flow
try {
    Integer.parseInt(input);
    // procesar
} catch (NumberFormatException e) {
    // usar excepcion como if/else: lento y confuso
    System.out.println("No era numero");
}

// BIEN: validar antes
if (!input.matches("\\\\d+")) {
    System.out.println("No era numero");
} else {
    int n = Integer.parseInt(input);
}

// BIEN: finally solo para cleanup, no para logica
try (Connection c = ds.getConnection()) {
    // usar c
} catch (SQLException e) {
    log.error("Error DB", e);
    throw e;  // rethrow para que el caller decida
}

// BIEN: log SIEMPRE antes de cerrar la propagacion
public void handleRequest() {
    try {
        service.process();
    } catch (DomainException e) {
        log.error("Error procesando request: {}", e.getMessage(), e);
        // convertir a respuesta HTTP al cliente
        throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
    }
}`,
        questions: [
          { question: 'Por que no usar excepciones para control flow?', answer: '1) Performance: crear y lanzar excepcion es costoso (stack trace, allocation). 2) Legibilidad: un if expresa intencion, un try-catch es para errores. 3) Confusion: el lector no sabe si fue un error o logica. Solo usa excepciones para errores reales, no para validar casos esperados.' },
          { question: 'Que informacion loguear?', answer: 'Siempre: mensaje descriptivo ("Error cargando usuario 123"), excepcion completa (con stack trace, usa log.error("msg", e) no solo getMessage()). Contexto: ids, parametros, estado. En capas bajas loguear una vez; en capas altas capturar y devolver respuesta amigable al usuario.' }
        ]
      }
    ]
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
  },
  // ==========================================
  // JPA / HIBERNATE
  // ==========================================
  {
    id: 400,
    title: 'JPA',
    slug: 'jpa',
    block: 'JPA_HIBERNATE',
    orderIndex: 1,
    description: 'Java Persistence API. Especificacion estándar para mapear objetos Java a tablas relacionales. Hibernate es la implementación de referencia. Usa EntityManager para CRUD, JPQL para queries, y annotations para mapeo (@Entity, @Table, @Column, @Id).',
    codeExample: `@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "name")
    private String name;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Order> orders = new ArrayList<>();

    // getters, setters, constructors
}

// EntityManager CRUD
EntityManager em = emf.createEntityManager();
User user = em.find(User.class, 1L);      // find by ID
em.persist(user);                          // insert
em.merge(user);                            // update
em.remove(user);                           // delete

// JPQL query
TypedQuery<User> query = em.createQuery(
    "SELECT u FROM User u WHERE u.email = :email", User.class);
query.setParameter("email", "ana@test.com");
User result = query.getSingleResult();`,
    questions: [
      { question: '¿Qué es JPA?', answer: 'Java Persistence API es una especificación (API estándar) para mapeo objeto-relacional (ORM). Define interfaces y annotations. Hibernate es una implementación de JPA.' },
      { question: '¿JPA vs Hibernate?', answer: 'JPA es la especificación (interfaces). Hibernate es una implementación concreta de JPA. Spring Data JPA usa Hibernate por debajo.' },
      { question: '¿Qué es el EntityManager?', answer: 'Interfaz principal de JPA para interactuar con el contexto de persistencia. Métodos: persist (insert), find (select), merge (update), remove (delete), createQuery (JPQL).' }
    ],
    subConcepts: [
      {
        title: 'Relaciones (@OneToMany, @ManyToOne)',
        slug: 'jpa-relaciones',
        orderIndex: 1,
        description: 'Mapeo de relaciones entre entidades. FetchType LAZY (default para @OneToMany) vs EAGER (default para @ManyToOne). CascadeType define operaciones en cascada.',
        codeExample: `// OneToMany - un User tiene muchos Orders
@OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
private List<Order> orders = new ArrayList<>();

// ManyToOne - muchos Orders pertenecen a un User
@ManyToOne(fetch = FetchType.LAZY)
@JoinColumn(name = "user_id")
private User user;

// ManyToMany con tabla de union
@ManyToMany
@JoinTable(
    name = "user_role",
    joinColumns = @JoinColumn(name = "user_id"),
    inverseJoinColumns = @JoinColumn(name = "role_id")
)
private Set<Role> roles = new HashSet<>();`,
        questions: [
          { question: '¿Lazy vs Eager fetching?', answer: 'Lazy: carga relacion cuando se accede (proxy). Eager: carga todo de una vez. Lazy es default para collections (@OneToMany). Eager es default para @ManyToOne. Preferir LAZY para evitar N+1.' },
          { question: '¿mappedBy?', answer: 'Indica qué lado es inverse (no owner). mappedBy = "user" en @OneToMany significa que User no controla la FK. Order tiene @ManyToOne con @JoinColumn y es el owner.' },
          { question: '¿CascadeType.ALL?', answer: 'Propaga operaciones: PERSIST, MERGE, REMOVE, REFRESH, DETACH. ALL = todas. orphanRemoval=true elimina hijos cuando se remueven de la collection.' }
        ]
      },
      {
        title: 'JPQL y @Query',
        slug: 'jpa-jpql-query',
        orderIndex: 2,
        description: 'JPQL (Java Persistence Query Language) usa entidades en vez de tablas. Spring Data JPA soporta derived queries (findBy...), @Query custom, y native queries.',
        codeExample: `// Spring Data JPA derived queries
List<User> findByEmail(String email);
List<User> findByEmailAndActive(String email, boolean active);
List<User> findByEmailContaining(String fragment);
Optional<User> findByEmailIgnoreCase(String email);

// @Query con JPQL
@Query("SELECT u FROM User u WHERE u.email = :email")
User findByEmailCustom(@Param("email") String email);

// @Query con native SQL
@Query(value = "SELECT * FROM users WHERE email = ?1", nativeQuery = true)
User findByEmailNative(String email);

// Ordenación y paginación
Page<User> findByActive(boolean active, Pageable pageable);
List<User> findByActiveOrderByNameDesc(boolean active);`,
        questions: [
          { question: '¿JPQL vs SQL?', answer: 'JPQL usa nombres de entidades y propiedades (User.email). SQL usa nombres de tablas y columnas (users.email). JPQL es portable entre bases de datos.' },
          { question: '¿Derived queries?', answer: 'Spring Data JPA genera la query a partir del nombre del método. findByEmailAndActive genera SELECT ... WHERE email = ? AND active = ?. Limitado a queries simples.' }
        ]
      }
    ]
  },
  {
    id: 401,
    title: 'Hibernate',
    slug: 'hibernate',
    block: 'JPA_HIBERNATE',
    orderIndex: 2,
    description: 'Implementación de JPA. Framework ORM más popular para Java. Features: lazy loading, caching (L1/L2), dirty checking, HQL, criteria API. Configuración via application.properties o persistence.xml.',
    codeExample: `# application.properties
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect

# L2 Cache
spring.jpa.properties.hibernate.cache.use_second_level_cache=true
spring.jpa.properties.hibernate.cache.region.factory_class=org.hibernate.cache.jcache.JCacheRegionFactory

# Batch processing
spring.jpa.properties.hibernate.jdbc.batch_size=50
spring.jpa.properties.hibernate.order_inserts=true`,
    questions: [
      { question: '¿Qué es dirty checking?', answer: 'Hibernate rueba cambios en entities managed. Cuando haces commit/flush, compara estado actual con snapshot. Si algo cambió, genera UPDATE automáticamente.' },
      { question: '¿L1 vs L2 cache?', answer: 'L1: Session-level cache, siempre activo, una por transacción. L2: SessionFactory-level cache, compartido entre sesiones, requiere configuración. Reduce queries repetidas.' },
      { question: '¿ddl-auto values?', answer: 'none: no hace nada. validate: valida schema existe. update: crea/modifica tablas (dev only). create: drop y recrea en cada start. create-drop: igual + drop al cerrar.' }
    ],
    subConcepts: []
  },
  {
    id: 402,
    title: 'Transacciones @Transactional',
    slug: 'transacciones',
    block: 'JPA_HIBERNATE',
    orderIndex: 3,
    description: 'Spring @Transactional demarca transacciones declarativamente. Propagación (REQUIRED, REQUIRES_NEW, NESTED), aislamiento (READ_COMMITTED, SERIALIZABLE), rollback para excepciones unchecked.',
    codeExample: `@Service
public class TransferService {
    @Transactional
    public void transfer(Long from, Long to, BigDecimal amount) {
        Account src = repo.findById(from);
        Account dst = repo.findById(to);
        src.setBalance(src.getBalance().subtract(amount));
        dst.setBalance(dst.getBalance().add(amount));
        // commit automatico al terminar el metodo
    }

    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void logTransfer(Long from, Long to, BigDecimal amount) {
        // nueva transaccion independiente
    }

    @Transactional(
        isolation = Isolation.READ_COMMITTED,
        rollbackFor = {InsufficientFundsException.class}
    )
    public void safeTransfer(Long from, Long to, BigDecimal amount) {
        // rollback custom exceptions
    }
}`,
    questions: [
      { question: '¿Propagation.REQUIRES_NEW?', answer: 'Suspende la transacción actual y crea una nueva. Útil para logs/auditoría que deben commitearse independientemente de la transacción principal.' },
      { question: '¿Rollback para checked exceptions?', answer: 'Por defecto soloUnchecked exceptions (RuntimeException) causan rollback. Para checked, usar rollbackFor = MiException.class.' }
    ],
    subConcepts: []
  },
  {
    id: 403,
    title: 'JDBC',
    slug: 'jdbc',
    block: 'JPA_HIBERNATE',
    orderIndex: 4,
    description: 'Java Database Connectivity. API de bajo nivel para acceso a bases de datos. DriverManager, Connection, Statement, PreparedStatement, ResultSet. Spring JDBC simplifica con JdbcTemplate.',
    codeExample: `// JDBC puro
try (Connection conn = DriverManager.getConnection(url, user, pass);
     PreparedStatement ps = conn.prepareStatement(
         "INSERT INTO users (name, email) VALUES (?, ?)")) {
    ps.setString(1, "Ana");
    ps.setString(2, "ana@test.com");
    ps.executeUpdate();
}

// Spring JdbcTemplate
@Repository
public class UserRepository {
    private final JdbcTemplate jdbc;

    public User findById(Long id) {
        return jdbc.queryForObject(
            "SELECT id, name, email FROM users WHERE id = ?",
            (rs, rowNum) -> new User(rs.getLong("id"),
                rs.getString("name"), rs.getString("email")),
            id);
    }
}`,
    questions: [
      { question: '¿JdbcTemplate vs JPA?', answer: 'JdbcTemplate para queries SQL directas, control total, simple. JPA para mapeo objeto-relacional, reduce boilerplate pero menos control sobre SQL.' },
      { question: '¿PreparedStatement vs Statement?', answer: 'PreparedStatement: precompilado, parametrizado, previene SQL injection, mejor performance en queries repetidos. Statement: queries estáticos sin parámetros.' }
    ],
    subConcepts: []
  },
  // ==========================================
  // SPRING BOOT
  // ==========================================
  {
    id: 500,
    title: 'Spring Boot Fundamentos',
    slug: 'spring-boot-fundamentos',
    block: 'SPRING_BOOT',
    orderIndex: 1,
    description: 'Framework que simplifica la creación de aplicaciones Spring. Autoconfiguration, embedded servers (Tomcat), starters, production-ready features. Opinionated: convención sobre configuración.',
    codeExample: `@SpringBootApplication
public class App {
    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }
}

// application.properties
server.port=8080
spring.datasource.url=jdbc:postgresql://localhost:5432/mydb
spring.jpa.hibernate.ddl-auto=update

// Starters - dependencias agrupadas
// spring-boot-starter-web
// spring-boot-starter-data-jpa
// spring-boot-starter-security
// spring-boot-starter-test`,
    questions: [
      { question: '¿Qué es @SpringBootApplication?', answer: 'Combina @Configuration + @EnableAutoConfiguration + @ComponentScan. Es la annotation principal para arrancar una app Spring Boot.' },
      { question: '¿Autoconfiguration?', answer: 'Spring Boot configura beans automáticamente según dependencias en classpath. Ej: si tiene spring-boot-starter-web, configura Tomcat, DispatcherServlet, etc.' },
      { question: '¿Starters?', answer: 'Dependencias agrupadas para una funcionalidad. spring-boot-starter-web incluye Spring MVC, Tomcat, Jackson, validation. Simplifica el pom.xml.' }
    ],
    subConcepts: [
      {
        title: 'Autoconfiguration y Conditions',
        slug: 'autoconfiguration-conditions',
        orderIndex: 1,
        description: 'Autoconfiguration usa @Conditional para decidir qué beans crear. @ConditionalOnClass, @ConditionalOnMissingBean, @ConditionalOnProperty.',
        codeExample: `@Configuration
@ConditionalOnClass(DataSource.class)
@EnableConfigurationProperties(DataSourceProperties.class)
public class DataSourceAutoConfiguration {

    @Bean
    @ConditionalOnMissingBean
    public DataSource dataSource(DataSourceProperties props) {
        return DataSourceBuilder.create()
            .url(props.getUrl())
            .username(props.getUsername())
            .password(props.getPassword())
            .build();
    }
}

// Excluir autoconfigurations
@SpringBootApplication(exclude = {
    DataSourceAutoConfiguration.class,
    RedisAutoConfiguration.class
})`,
        questions: [
          { question: '¿@ConditionalOnMissingBean?', answer: 'Crea el bean solo si no existe ya uno del mismo tipo. Permite override: si defines tu propio DataSource, Spring no crea el default.' }
        ]
      }
    ]
  },
  {
    id: 501,
    title: 'Spring Boot Testing',
    slug: 'spring-boot-testing',
    block: 'SPRING_BOOT',
    orderIndex: 2,
    description: 'Testing en Spring Boot. @SpringBootTest (full context), @WebMvcTest (solo web layer), @DataJpaTest (solo JPA), @MockBean para mockear dependencias.',
    codeExample: `// Test de integración completo
@SpringBootTest
class MyServiceTest {
    @Autowired private MyService service;

    @Test
    void shouldDoSomething() {
        // test con contexto Spring completo
    }
}

// Test de controller (web layer)
@WebMvcTest(UserController.class)
class UserControllerTest {
    @Autowired private MockMvc mockMvc;
    @MockBean private UserService userService;

    @Test
    void shouldReturnUser() throws Exception {
        when(userService.findById(1L)).thenReturn(new User("Ana"));

        mockMvc.perform(get("/users/1"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.name").value("Ana"));
    }
}

// Test de JPA
@DataJpaTest
class UserRepositoryTest {
    @Autowired private TestEntityManager em;
    @Autowired private UserRepository repo;

    @Test
    void shouldFindByEmail() {
        em.persist(new User("Ana", "ana@test.com"));
        Optional<User> found = repo.findByEmail("ana@test.com");
        assertThat(found).isPresent();
    }
}`,
    questions: [
      { question: '¿@SpringBootTest vs @WebMvcTest?', answer: '@SpringBootTest carga contexto completo (lento). @WebMvcTest solo carga web layer (controllers, MVC) y mockea servicios. Más rápido para tests de controller.' },
      { question: '¿@MockBean?', answer: 'Reemplaza un bean real con un mock de Mockito en el contexto Spring. Útil para aislar capas: mockear service en tests de controller.' }
    ],
    subConcepts: []
  },
  {
    id: 502,
    title: 'Microservicios',
    slug: 'microservicios',
    block: 'SPRING_BOOT',
    orderIndex: 3,
    description: 'Arquitectura donde la app se divide en servicios pequeños e independientes. Spring Cloud: Eureka (service discovery), Config Server, Gateway, Circuit Breaker (Resilience4j), Sleuth/Zipkin (tracing).',
    codeExample: `// Eureka client
@SpringBootApplication
@EnableEurekaClient
public class ProductService { }

// API Gateway
@SpringBootApplication
@EnableZuulProxy
public class Gateway { }

// Circuit Breaker (Resilience4j)
@CircuitBreaker(name = "productService", fallbackMethod = "fallback")
public Product getProduct(Long id) {
    return restTemplate.getForObject("http://product-service/" + id, Product.class);
}

public Product fallback(Long id, Exception e) {
    return new Product("default", 0);
}`,
    questions: [
      { question: '¿Microservicios vs Monolito?', answer: 'Microservicios: independientes, escalables, deploy independiente, tech stack variado. Monolito: simple, fácil debugging, deploy único. Microservicios añaden complejidad: network, consistencia, tracing.' },
      { question: '¿Service Discovery?', answer: 'Eureka registry. Servicios se registran al arrancar. Otros servicios consultan el registry para encontrar instancias. Permite escalado dinámico sin configuración manual.' }
    ],
    subConcepts: []
  },
  {
    id: 503,
    title: 'Spring Boot Actuator',
    slug: 'spring-boot-actuator',
    block: 'SPRING_BOOT',
    orderIndex: 4,
    description: 'Features de producción: health checks, métricas, info, environment. Endpoints HTTP: /actuator/health, /actuator/metrics, /actuator/info. Integración con Prometheus, Grafana.',
    codeExample: `# application.properties
management.endpoints.web.exposure.include=health,info,metrics
management.endpoint.health.show-details=when-authorized
management.endpoints.web.base-path=/manage

# Prometheus
management.metrics.export.prometheus.enabled=true
management.endpoints.web.exposure.include=prometheus

# Custom health indicator
@Component
public class CustomHealthIndicator implements HealthIndicator {
    @Override
    public Health health() {
        int errorCode = check();
        if (errorCode != 0) {
            return Health.down()
                .withDetail("Error Code", errorCode).build();
        }
        return Health.up().build();
    }
}`,
    questions: [
      { question: '¿Actuator endpoints?', answer: '/health: estado app. /metrics: métricas JVM/HTTP/DB. /info: info app. /env: environment. /loggers: cambiar log levels en runtime. /beans: beans registrados.' }
    ],
    subConcepts: []
  },
  {
    id: 504,
    title: 'Profiles y Configuración',
    slug: 'profiles-config',
    block: 'SPRING_BOOT',
    orderIndex: 5,
    description: 'Profiles permiten configuración por entorno (dev, prod, test). Archivos: application-dev.properties, application-prod.properties. @Profile en beans. Configuración externalizada.',
    codeExample: `# application.properties (default)
spring.profiles.active=dev

# application-dev.properties
spring.datasource.url=jdbc:h2:mem:devdb
server.port=8080

# application-prod.properties
spring.datasource.url=\${DB_URL}
server.port=\${PORT:8080}

// Beans por profile
@Configuration
@Profile("dev")
public class DevConfig {
    @Bean
    public DataSource dataSource() {
        return new H2EmbeddedDataSource();
    }
}

@Configuration
@Profile("prod")
public class ProdConfig {
    @Bean
    public DataSource dataSource() {
        return new PostgresDataSource();
    }
}`,
    questions: [
      { question: '¿Cómo activar profiles?', answer: 'spring.profiles.active=dev en properties. O via línea de comandos: java -jar app.jar --spring.profiles.active=prod. O env var: SPRING_PROFILES_ACTIVE=prod.' }
    ],
    subConcepts: []
  },
  // ==========================================
  // CLEAN CODE / SOLID
  // ==========================================
  {
    id: 600,
    title: 'SOLID',
    slug: 'solid',
    block: 'CLEAN_CODE_SOLID',
    orderIndex: 1,
    description: '5 principios de diseño OOP. S=Single Responsibility, O=Open/Closed, L=Liskov Substitution, I=Interface Segregation, D=Dependency Inversion. Facilitan mantenimiento, testabilidad y extensibilidad.',
    codeExample: `// S - Single Responsibility: una clase, una razon para cambiar
class UserValidator { /* solo validacion */ }
class UserRepository { /* solo persistencia */ }
class UserController { /* solo HTTP */ }

// O - Open/Closed: abierto a extension, cerrado a modificacion
interface PaymentMethod { void pay(BigDecimal amount); }
class CreditCard implements PaymentMethod { ... }
class PayPal implements PaymentMethod { ... }
// Agregar nuevos metodos sin tocar PaymentProcessor

// L - Liskov Substitution: subclase usable donde superclase esperada
class Bird { void fly() {} }
class Penguin extends Bird { /* no puede volar -> viola LSP */ }
// Solucion: separar FlyingBird

// I - Interface Segregation: interfaces pequenas y especificas
interface Printer { void print(); }
interface Scanner { void scan(); }
// MultiFunctionPrinter implementa ambos
// SimplePrinter solo Printer

// D - Dependency Inversion: depender de abstracciones
interface Database { void save(User u); }
class UserController {
    private final Database db; // no de MySqlDatabase concreta
}`,
    questions: [
      { question: '¿Single Responsibility?', answer: 'Una clase debe tener una sola razon para cambiar. UserController solo maneja HTTP, no accede a DB ni valida reglas de negocio. Separar en capas: Controller, Service, Repository.' },
      { question: '¿Open/Closed?', answer: 'Abierto a extensión (nuevas funcionalidades via nuevas clases/interfaces), cerrado a modificación (no cambiar código existente). Usar polimorfismo: añadir nuevas implementaciones de interface sin tocar el código que las usa.' },
      { question: '¿Liskov Substitution?', answer: 'Si S es subtipo de T, objetos de T pueden reemplazarse por S sin alterar comportamiento. Penguin extends Bird violates LSP si Bird.fly() se espera que funcione. Solución: interfaces específicas (FlyingBird).' },
      { question: '¿Dependency Inversion?', answer: 'Módulos de alto nivel no deben depender de módulos de bajo nivel. Ambos deben depender de abstracciones (interfaces). UserController no depende de MySQLDatabase, depende de interface Database.' }
    ],
    subConcepts: []
  },
  {
    id: 601,
    title: 'Clean Code',
    slug: 'clean-code',
    block: 'CLEAN_CODE_SOLID',
    orderIndex: 2,
    description: 'Principios para escribir código legible, mantenible y testeable. Nombres descriptivos, funciones pequeñas, una responsabilidad, sin comentarios obvios, sin duplicación. Base: libro de Robert C. Martin (Uncle Bob).',
    codeExample: `// MAL - nombres cripticos
public List<int[]> rl(List<int[]> n) {
    List<int[]> r = new ArrayList<>();
    for (int[] x : n) {
        if (x[0] == 4) r.add(x);
    }
    return r;
}

// BIEN - nombres descriptivos
public List<int[]> flaggedCells(List<int[]> gameBoard) {
    List<int[]> flagged = new ArrayList<>();
    for (int[] cell : gameBoard) {
        if (cell[STATUS_VALUE] == FLAGGED) {
            flagged.add(cell);
        }
    }
    return flagged;
}

// MAL - funcion larga con multiples responsabilidades
public void process(User user) {
    // validar
    if (user.getName() == null) throw new RuntimeException();
    // guardar
    repo.save(user);
    // enviar email
    emailService.send(user.getEmail());
    // log
    logger.info("User saved");
}

// BIEN - extraer funciones pequenas
public void processUser(User user) {
    validate(user);
    user = save(user);
    sendWelcomeEmail(user);
    logUserSaved(user);
}`,
    questions: [
      { question: '¿Cuanto debe medir una funcion?', answer: 'Uncle Bob: 20 lineas ideal. Maximum 50. Si es más, extraer a funciones más pequeñas. Una funcion hace una cosa (Single Responsibility).' },
      { question: '¿Comentarios buenos o malos?', answer: 'Malos: explican que hace el codigo (si necesitas comentario, el codigo no es claro). Buenos: explican POR QUE, no QUE. TODO, FIXME, warnings. Documentación de API publica (Javadoc).' },
      { question: '¿DRY (Dont Repeat Yourself)?', answer: 'Evitar duplicación de codigo. Si hay codigo repetido en 3+ lugares, extraer a metodo/clase compartida. Reduce bugs: un cambio se hace en un solo sitio.' }
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
