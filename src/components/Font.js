import "./Font.css";
const Font = () => {
  return (
    <div>
      <h1>
        How to provide a particular font to a web visitor's browser when they
        request it from your server.
      </h1>
      <hr/> 
      <h2>Research methods</h2>
       <hr/> 
      <p>
        First i have reffered a website called{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts">
          web Fonts website
        </a>
      </p>
      <h2>Give me Fonts </h2>
      <hr/> 
      <p>
        To deliver a specific font to clients, i have followed the steps
        discussed below
      </p>
      <ol>
        <li>
          then i have choosen a font of my desired choice from a a website
          called <a href="https://www.dafont.com/">dafont</a> then i have
          downloaded a font called "Sandler Trial" in a .zip format and unzip the
          file
        </li>
        <li>
          then, after copy the copy the <i>"Sandler Trial.otf"</i> file in our
           <code>source</code> flder of our to make it access{" "}
        </li>
        <li>
          then access <code>index.css </code>file and we can use the <code>@font-face</code> rule
          in your CSS to define the font and specify the font file's location.
        </li>
        <li>
          To deliver a specific font to clients, you can Then, apply the font to
          specific HTML elements using the <code>font-family</code> property.
        </li>
        <li>
          and i also configured the source url by using the following code
          <p class="source">src: url("Sandler Trial.otf")format("woff2");</p>
        </li>
      </ol>
    </div>
  );
};

export default Font;