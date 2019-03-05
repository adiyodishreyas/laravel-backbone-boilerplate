### Project Depencies
- php@7.3.2
- valet for mac

### Install Valet
- Install or update Homebrew to the latest version using brew update.
- Install PHP 7.3 using Homebrew via ```brew install php```
- Install Composer.
- Install Valet with Composer via ```composer global require laravel/valet```. Make sure the ~/.composer/vendor/bin directory is in your system's "PATH".
- Run the ```valet install``` command. This will configure and install Valet and DnsMasq, and register Valet's daemon to launch when your system starts.
- Run ```valet use php@7.3```. We are using php7.3.2
- Run ```mkdir ~/code```
- Run ```cd ~/code```
- Run ```valet park```
- Download any laravel ```repo-name```
- access the url http://repo-name.test
- For https ```valet secure repo-name```
- Unsecure ```valet unsecure repo-name```

### Frontend
- Use https://github.com/tj/n to manage nodejs and npm. Make sure you are using the latest version of n
- node.js@v10.15.2
- npm@6.4.1
- Run ```npm install`` to install all frontend dependencies
- Install all frontend packages as dependencies ie ```npm install package-name --save```
- Run ```npm run dev``` or ```npm run watch``` in dev
- Run ```npm run prod``` for production