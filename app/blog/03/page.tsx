import BlogPage from "../components/blogpage";

export default function Page() {
    return (    
        <BlogPage 
            image="blog2.jpg" 
            title="Understanding Classes in Java for AP Computer Science A"
            date="03 Mar 2025" >
                
                <p>
                In the <strong>AP Computer Science A</strong> course, understanding <strong>classes</strong> is crucial because Java is an <strong>object-oriented programming
                    (OOP)</strong> language. This article will break down <strong>what classes are, how to define them, and how they work in Java</strong>, following
                the concepts covered in AP CSA.
            </p>
            <h3>What is a Class in Java?</h3>
            <p>
                A <strong>class</strong> is a blueprint for creating objects. It defines the <strong>attributes (instance variables)</strong> and <strong>behaviors (methods)</strong> that
                objects of that class will have.
            </p>
            <p>
                For example, if we were designing a program for a <strong>school</strong>, we might create a <code>Student</code> class to represent students.
            </p>

            <div className="code-container">

                <pre>
                    {
`public class Student {
    // Attributes (instance variables)
    private String name;
    private int gradeLevel;

    // Constructor
    public Student(String studentName, int studentGrade) {
        name = studentName;
        gradeLevel = studentGrade;
    }

    // Behavior (method)
    public void printInfo() {
        System.out.println("Student: " + name + ", Grade: " + gradeLevel);
    }
}`}
                </pre>
            </div>

            <ul>
                <li><code>name</code> and <code>gradeLevel</code> are <strong>instance variables</strong> that store data for each <code>Student</code> object.</li>
                <li>The <strong>constructor</strong> initializes these variables when a <code>Student</code> object is created.</li>
                <li>The <code>printInfo()</code> method allows an object to display its information.</li>
            </ul>

            <h3>Creating and Using Objects</h3>

            <p>Once a class is defined, we can create objects (instances) of that class in a <code>main</code> method.</p>

            <div className="code-container">
                <pre>
                    {
`public class School {
    public static void main(String[] args) {

    // Creating objects of the Student class
    Student student1 = new Student("Alice", 10);
    Student student2 = new Student("Bob", 12);

    // Calling methods on the objects
    student1.printInfo();
    student2.printInfo();
    }
}`}
                </pre>

            </div>            

            <h4>Output:</h4>

            <div className="code-container">
                <pre>
                    Student: Alice, Grade: 10
                    Student: Bob, Grade: 12
                </pre>
            </div>

            <p>This demonstrates how <strong>objects store unique data</strong> and interact with methods.</p>

            <h3>Instance Variables and Encapsulation</h3>
            <p>The <code>private</code> keyword in our instance variables (<code>name</code> and <code>gradeLevel</code>) protects them from being directly accessed or
                modified from outside the class.</p>
            <p>To safely access and modify these values, we use <strong>getter and setter methods</strong></p>

            <div className="code-container">
                <pre>
                    {
`public class Student {
    private String name;
    private int gradeLevel;

    public Student(String studentName, int studentGrade) {
        name = studentName;
        gradeLevel = studentGrade;
    }

    // Getter method
    public String getName() {
        return name;
    }

    // Setter method
    public void setGradeLevel(int newGrade) {
        gradeLevel = newGrade;
    }
}`}
                </pre>
            </div>

            <p>Now, in another class:</p>
            <div className="code-container">
                <pre>
                    {
`public class Test {
    public static void main(String[] args) {
        Student student = new Student("Charlie", 11);

        // Using the getter method
        System.out.println(student.getName()); // Output: Charlie

        // Using the setter method
        student.setGradeLevel(12);
    }
}`}
                </pre>
            </div>
            <p>This practice is known as <strong>encapsulation</strong>, a key OOP principle.</p>


            <h3>Static vs. Instance Variables and Methods</h3>
            <ul>
                <li><strong>Instance variables/methods</strong> belong to an <strong>individual</strong> object. Each object has its own copy.</li>
                <li><strong>Static variables/methods</strong> belong to the <strong>class itself</strong> and are shared across all objects.</li>
            </ul>
            <p>Example of a <strong>static method</strong></p>
            <div className="code-container">
                <pre>
                    {
`public class MathHelper {
    public static int square(int num) {
    return num * num;
    }
}`}
                </pre>
            </div>


            <p>You can call it without creating an object:</p>
            <div className="code-container">
                <pre>{
`public class Main {
    public static void main(String[] args) {
        System.out.println(MathHelper.square(5)); // Output: 25
    }
}`}
                </pre>
            </div>

            <h3>Constructors: Special Methods for Object Initialization</h3>
            <p>A <strong>constructor</strong> runs when an object is created and initializes instance variables. If no constructor is written, Java provides a default constructor (with no parameters).</p>
            <p>Example of a constructor with default values:</p>

            <div className="code-container">
                <pre>
{`public class Car {
    private String model;
    private int year;

    // Default constructor
    public Car() {
        model = "Unknown";
        year = 2000;
    }

    public void printCar() {
        System.out.println("Model: " + model + ", Year: " + year);
    }
}`}
                </pre>
            </div>


            <p style={{"marginBottom":"1rem"}} >Using it:</p>
            <div className="code-container">
                <pre>
                    {
`Car myCar = new Car();
myCar.printCar(); // Output: Model: Unknown, Year: 2000`}
                </pre>
            </div>

            <h3>Summary: Key Takeaways</h3>
            <ul>
                <li>A <strong>class</strong> is a blueprint for objects.</li>
                <li><strong>Instance variables</strong> store object data, while <strong>methods</strong> define behavior.</li>
                <li><strong>Constructors</strong> initialize objects.</li>
                <li><strong>Encapsulation</strong> protects data using <code>private</code> variables and <strong>getter/setter methods</strong>.</li>
                <li><strong>Static members</strong> belong to the class rather than individual objects.</li>
                <p>Understanding these concepts is essential for the <strong>AP Computer Science A exam</strong> and writing efficient Java programs.</p>
                <p>Want more practice? Try creating a <code>Car</code> or <code>Book</code> class with different attributes and methods!</p>
            </ul>

            </BlogPage>
    );
}