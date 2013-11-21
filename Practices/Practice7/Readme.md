# Practice7/app

This folder contains the javascript files for the application.

# Practice7/resources

This folder contains static resources (typically an `"images"` folder as well).

# Practice7/overrides

This folder contains override classes. All overrides in this folder will be 
automatically included in application builds if the target class of the override
is loaded.

# Practice7/sass/etc

This folder contains misc. support code for sass builds (global functions, 
mixins, etc.)

# Practice7/sass/src

This folder contains sass files defining css rules corresponding to classes
included in the application's javascript code build.  By default, files in this 
folder are mapped to the application's root namespace, 'Practice7'. The
namespace to which files in this directory are matched is controlled by the
app.sass.namespace property in Practice7/.sencha/app/sencha.cfg. 

# Practice7/sass/var

This folder contains sass files defining sass variables corresponding to classes
included in the application's javascript code build.  By default, files in this 
folder are mapped to the application's root namespace, 'Practice7'. The
namespace to which files in this directory are matched is controlled by the
app.sass.namespace property in Practice7/.sencha/app/sencha.cfg. 
