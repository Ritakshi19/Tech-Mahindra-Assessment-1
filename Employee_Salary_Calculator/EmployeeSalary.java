import java.util.*;
class Employee
{
    private String name;
    private int ID;
    private double basic_salary;
    private double bonus;
    private double tax;

    Employee(String name, int ID, double basic_salary,double bonus,double tax)
    {
        this.name=name;
        this.ID=ID;
        this.basic_salary=basic_salary;
        this.bonus=bonus;
        this.tax=tax;
    }
    
    public void netSalary()
    {
        double net_salary= (basic_salary + bonus) - tax;
        System.out.println("Net Salary : "+net_salary);
    }   
}

public class EmployeeSalary{
    public static void main(String args[])
    {
        Scanner scr=new Scanner(System.in);
        System.out.println("Enter following details- Name, Employee ID, Basic Salary, Bonus, Tax");
        String name=scr.nextLine();
        int ID=scr.nextInt();
        double basic_salary=scr.nextDouble();
        double bonus=scr.nextDouble();
        double tax=scr.nextDouble();

        System.out.println("Employee details are  \nName : "+name+"\nEmployee ID :  "+ID+"\nBasic Salary : "+basic_salary+"\nBonus : "+bonus+"\nTax : "+tax);

        Employee emp=new Employee (name,ID,basic_salary,bonus,tax);
        emp.netSalary();
        scr.close();

    }
}