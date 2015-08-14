export class App{
    configureRouter(config, router){
        config.title = "Aurelia Contact List";
        config.map([
            { route : ['', 'home'], name: 'home', moduleId: 'home', nav: true, title: 'Home'}
        ]);

        this.router = router;
    }
}