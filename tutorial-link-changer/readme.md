# Tutorials Link Changer

Where to put?  
Anywhere  

Installation :   
Create a script tag with src pointing to tutorial-link-changer.js or tutorial-link-changer.min.js for minified version and place it on the footer ads (Recommended).  

Initialization :  
An object called "b" (lowercase) must be initialized with the following variable  
Note : May be combined with the b var on cpanel-logo-to-copyright and any other scripts.  

Required variable's :  
    * tutorial -> URL of your tutorials with HTTP Protocol.  

Example :  
    ```
    var b = {  
        tutorial : "http://pch.com/help/",    
    }  
    ```

### NOTE : USE GITHACK OR GITCDN TO MAKE SURE THE CONTENT-TYPE HEADER IS SET CORRECTLY.  
The RAW option on GitHub can return an incorrect Content-Type header which can makes thing goes not the way it supposed to be.  
* GitHack : https://raw.githack.com/   
* GitCDN : http://gitcdn.link/    
* RawGit : http://rawgit.com/   

The full code :  

```
<script type="text/javascript">  

    var b = {  
        tutorial : "YOUR TUTORIAL LINK WITH HTTP PROTOCOL",   
    }  

</script>  
<script src="https://rawgit.com/VPTOfficial/VistaPanel-Customizations/master/tutorial-link-changer/tutorial-link-changer.js" type="text/javascript"></script>  
```
