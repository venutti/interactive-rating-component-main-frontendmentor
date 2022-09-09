# Frontend Mentor - Interactive rating component solution

Esta es una solución al [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Los desafíos de Frontend Mentor ayudan a mejorar las skills al codear construyendo proyectos realistas.

## Tabla de Contenidos

- [Resumen](#resumen)
  - [El desafío](#el-desafío)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Mi proceso](#mi-proceso)
  - [Construido con](#construido-con)
  - [Lo que aprendí](#lo-que-aprendí)
  - [Desarrollo continuo](#desarrollo-continuo)
  - [Sitios de interés](#sitios-de-interés)

## Resumen

### El desafío

Los usuarios deberían poder:

- Ver el layout más óptimo, independientemente de la pantalla de su dispositivo
- Ver 'hover states' para elementos interactivos
- Seleccionar y seleccionar el rating
- Ver la carta "Thank you" después de enviar el rating

### Screenshot

![Captura desde 2022-09-09 15-47-25](https://user-images.githubusercontent.com/87911089/189423909-cb805321-fab4-46f2-99a0-98668b5e78e2.png)


### Links

- [GitHub](https://github.com/venutti/interactive-rating-component-main-frontendmentor)
- [GitHub Pages](https://venutti.github.io/interactive-rating-component-main-frontendmentor/)

## Mi proceso

### Construido con

- Etiquetas HTML5 semánticas
- Variables de CSS
- Flexbox
- CSS Grid
- Desarrollo Mobile-first


### Lo que aprendí

Para poder centrar elementos, la manera mas económica de hacerlo (a nivel de código) es la siguiente:
```css
.center {
  display: grid;
  place-content: center;
}
```

Y otra de las herramientas más fascinantes es la de poder estilizar los *radio-buttons*.

En las etiquetas, usé la siguiente estructura para poder **superponer el label en el input**:
```html
<label for="1" class="star-point">
  <input type="radio" id="1" value="1" name="rating-stars">
  <span>1</span>
</label>
```
Para poder estilizar los radiobuttons a mi gusto, tuve que *resetear* los estilos de fábrica usando:
```css
.star-point input {
  -webkit-appearance: none;
  appearance: none;
  /*not removed via appearance*/
  margin: 0;
  /*for the focus-style*/
  outline: none;
}
```
También, es destacable el uso de los posicionamientos *absolute* y *relative* para la superposición de objetos, así como el uso de *width: inherit* y *height: inherit* para poder copiar el tamaño del elemento padre.

### Desarrollo continuo

Queda pendiente ver cómo crear elementos html, para no hacer ese juego con el ```element.classList.toggle("hide").```

### Sitios de interés

Para ver de manera profunda los estílos que se le puede dar a los **radio-buttons**, es altamente recomendable visitar este [sitio](https://moderncss.dev/pure-css-custom-styled-radio-buttons/).
