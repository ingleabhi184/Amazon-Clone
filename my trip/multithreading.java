Multithreading is a process of executing multiple threads at a time.
A thread is a small java program.
Mutithreading achive by two ways-
1) With the thread class-
2) with runnable interface-

1)Thread-
     Thread is a lightweight sub process, the smallest unit of processing.
     Thread is a independent.
       Thread class extends object class.
	in thread their are multiple methods -
	1)run method- public void run()
	2)start method-public void start()

-Thread LifeCycle 
1)New State
2)run state
3)block State
4)weight state
5)time weight state
6)terminated state


-how to create multiple threds
	public class A extends Thread
	{
	public void run()
	{
	System.out.println("this is my thread"+thread.currentThread().getid());
	}
	}

     public class b
{
    public static void main(String args[])
{





how to set thread name

for(int i=0;i<3;i++)
{
A a=new A();
A b=new A();
A c=new A();
a.start();
a.setName("First Thread");
b.start();
b.setName("Second Thread");
c.start();
c.setName("Third Thread");
a.sleep(3000);