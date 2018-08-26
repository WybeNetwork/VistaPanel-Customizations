# cPanel Logo to Copyright

Where to put?  
Anywhere  

Installation :   
Create a script tag with src pointing to cpanel-logo-to-copyright.js or cpanel-logo-to-copyright.min.js for minified version and place it on the footer ads (Recommended).  

Initialization :  
An object called "b" (lowercase) must be initialized with the following variable  

Required variable's :  
    * company_name -> Company Name  
    * company_logo -> Company Logo  
    * company_started -> Year Company Started Exsisting or Publicablly Announced  
    * prm_site -> Primary site URL (With HTTP:// or HTTPS://)  

Example :  
    ```
    var b = {  
        company_name : "Planet Cloud Hosting",  
        company_logo : "http://planetcloudhosting.cf/images/logo.png",  
        company_started : "2017",  
        prm_site : "http://planetcloudhosting/cf",  
    }  
    ```

### NOTE : USE GITHACK OR GITCDN TO MAKE SURE THE CONTENT-TYPE HEADER IS SET CORRECTLY.  
The RAW option on GitHub can return an incorrect Content-Type header which can makes thing goes not the way it supposed to be.  
* GitHack : https://raw.githack.com/  
* GitCDN : http://gitcdn.link/  

The full code :  

```
<script type="text/javascript">  

    var b = {  
        company_name : "Your company name",  
        company_logo : "Your company logo",  
        company_started : "What year did your company started?",  
        prm_site : "Your Primary site URL (With HTTP:// or HTTPS://)",  
    }  

</script>  
<script src="https://raw.githack.com/PlanetGamingGG/myownfreehost-themes-misc/master/js/cpanel-logo-to-copyright.js" type="text/javascript"></script>  
```
