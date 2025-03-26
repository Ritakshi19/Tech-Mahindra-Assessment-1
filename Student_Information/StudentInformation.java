/*Problem Statement:
•	Create a Student class with attributes like name, roll number, and marks.
•	Use a method to display the student details.
•	Create an object of the class and call the method to print student information*/

import java.util.*;
class Student{
    private String name;
    private int roll_no;
    private double marks;

    Student(String name, int roll_no, double marks){
        this.name=name;
        this.roll_no=roll_no;
        this.marks=marks;
    }

    public void displayDetails(){
        System.out.println("Name : "+name+"\nRoll_No : "+roll_no+"\nMarks  : "+marks);
    }
}

public class StudentInformation{
    public static void main(String args[])
    {
        Scanner scr=new Scanner(System.in);
        System.out.println("Enter following details- Name, Roll_No, Marks");
        String name=scr.nextLine();
        int roll_no=scr.nextInt();
        double marks=scr.nextDouble();

        Student student=new Student(name,roll_no,marks);
        System.out.println("Details of the Student");
        student.displayDetails();
        scr.close();
    
    } 
}
