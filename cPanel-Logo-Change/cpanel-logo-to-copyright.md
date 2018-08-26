# PLEASE READ https://github.com/PlanetGamingGG/myownfreehost-themes-misc/issues/1

cPanel Logo to Copyright

Where to put?
Anywhere

Installation : 
Create a script tag with src pointing to cpanel-logo-to-copyright.js or cpanel-logo-to-copyright.min.js for minified version and place it on the footer ads (Recommended).

Initialization :
Some variable's needs to be declared before the script is executed.
If the variable's is not present, the script will skip without error's logged.

Required variable's :
	* companyName -> Company Name
    * companyLogo -> Company Logo
    * companyStarted -> Year Company Started Exsisting or Publicablly Announced
    * primarySite -> Primary site URL (With HTTP:// or HTTPS://)

Example :
	```
    var companyName = 'Your company name';
    var companyLogo = 'Your company logo';
    var companyStarted = 'What year did your company started?';
    var primarySite = 'Your Primary site URL (With HTTP:// or HTTPS://)';
    ```

#NOTE : USE GITHACK OR GITCDN TO MAKE SURE THE CONTENT-TYPE HEADER IS SET CORRECTLY.
The RAW option on GitHub can return an incorrect Content-Type header which can makes thing goes not the way it supposed to be.
* GitHack : https://raw.githack.com/
* GitCDN : http://gitcdn.link/

The full code :

```
<script type="text/javascript">

	var companyName = 'Your company name';
    var companyLogo = 'Your company logo';
    var companyStarted = 'What year did your company started?';
    var primarySite = 'Your Primary site URL (With HTTP:// or HTTPS://)';

</script>
<script src="https://raw.githack.com/PlanetGamingGG/myownfreehost-themes-misc/master/js/cpanel-logo-to-copyright.js" type="text/javascript"></script>
```
