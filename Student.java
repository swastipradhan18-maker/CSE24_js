package com.abes;

public class Student {

	int rollNo;
	String name;
	
	void display() {
		System.out.println(rollNo+" "+name);
		
	}
}
	class TestStudent{
		public static void main(String[] args) {
			Student s1= new Student();
			s1.rollNo=213;
			s1.name="Swastika";
			s1.display();
	}	
}