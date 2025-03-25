Spring Boot 

-spring boot basically use to develop rapid application.
-spring boot provides embedded http servers, such as tomact,jtty.
-we don't need to deploy the war files.
-their is no requirement for xml configuration.
-the spring boot increases productivity and reduces development time.



* spring boot architecture

-in spring boot their are layers multiple types of module:
1) presentation layer
2) business layer
3) persistence layer
3) database layer   

  * Spring boot Anotation

    1)@springbootapplication-
	this anoatation that marks a class as configuration class for spring boot application.
         this anotation enables auto configuratuion and component scaning.
	this anotations combine their are three anotation  1)@configuration 2)@componentscan   3)@enableautoConfiguration

		ex-@springbootapplication = @configuration + @componentscan + @enableautoconfiguration

     2) @configuration -
	 use to anaotate the class.

     3) @componentscan -
	 autoatically and register component in specified package. 
	it scan the package and sub packages for anotated classes .

     4) @enableautoconfiguration
	this basically use to enable automatic configuration of the spring boot application context.
	it configures beans base on the dependensis.

      5)@RestController
         this basically use to create restfull webservices.
	@restcontroller anoatation combines @controller @responsebody
	@restcontroller = @controller + @responsebody

       6)@requestmapping
	 this anotation basically use to map web request to specific methods and classes in a controller.
	this anotation basically use to class level or method level. 

	7)@controller
         this anotation basically use to define and entry point for spring and springboot application.
          
	8)@responsebody 
	  basically use to binds a method return value to the http response body.
	  this anotation applys method or class
