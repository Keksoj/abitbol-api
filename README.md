# L'API Abitbol

### comment apprendre les APIs sans se prendre au sérieux.

Pour inclure une citation aléatoire de la Classe Américaine dans votre site, recopiez ça dans votre html :

```html
<div id="place"></div>
<script>
  fetch("http://54.37.75.123:4000/abitbol")
    .then(response => response.text())
    .then(result => (document.getElementById("place").innerHTML = result));
</script>
```

Mieux, faites tourner ça sur votre propre machine (il faut `nodeJS` installé) :

``` bash
git clone https://github.com/keksoj/abitbol-api.git
cd abitbol-api
node index.js
```

Et vérifiez que ça fonctionne avec curl:

``` bash 
curl http://localhost:4000/abitbol
```
