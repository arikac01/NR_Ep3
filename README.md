# NR_Ep: 3 
 
**# JSX and it's Superpowers?**


JSX is part of React, which makes React code faster, easier, readable, and developer-friendly. We can also use React Core to make components, but JSX makes things easy. It looks like HTML or XML, but they are different from each other. Their syntaxes are alike, but not them. FB developers developed this JSX. The behind-scenes, Babel - dependent on Parcel dependency, is doing all the transpile of our JSX code. 

**# Role of Type attribute in Script tag? Options that can be used for Type?
**

In Script tag, we use type attribute to represent what kind of script file is it. If we are using to link a JS file, we then use type as text/javascript. If we are getting the script from libraries like react, we use type as modules. If the script is from not a library and is a standalone, then we can use type as application. 

**# {Title} vs {<Title/>} vs {<Title><Title/>}**


We generally wrap the react component in html tag like <Title/> when you want to include that whole piece of Title code.
But, as we know, <Title/> is nothing but <TItle><Title/>. So we can also use this to get the same output. Coming to the basics, When we are using {} inside of a component, we can literally write any JS code inside it. They why not call the other component as a method in this part? SO, we can also use {Title} as method and this also gives the same output.
In the end all the three gives you same output.
