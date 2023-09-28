import './Font.css'

const Font = () => {
    return (
        <div>
            <h1>Serving fonts</h1>
            <hr />
            <section>
                <h2>Research</h2>
                <p>I have gone through <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts#generating_the_required_code">MDN docs</a> to know the process of how a font can be delivered to a client (browser) by making a request to the server</p>
            </section>
            <section>
                <br />
                <h2>Give me a font</h2>
                <p>I have followed the below steps to configure the font</p>
                <ol>
                    <li>I have chosen God of War font from <a href='https://www.dafont.com/theme.php?cat=402'>dafont</a></li>
                    <li>Downloaded the God of Font from the dafont website</li>
                    <li>Extracted the files from the downloaded ZIP file</li>
                    <li>File called <b>GODOFWAR.TTF</b> exists in the extracted ZIP file</li>
                    <li>Copy the <b>GODOFWAR.TTF</b> in <code>'src'</code> folder in the React Project</li>
                    <li>Now configure the index.css file with <code>@font-face</code> and <code>font-family</code> (for the html tag)</li>
                    <li>In the <code>@font-face</code>, configure the <code>font-family</code> with a name as <code>font-family: "God of War";</code></li>
                    <li>Also, congiure src url property of <code>@font-face</code> with the file, (<b>GODOFWAR.TTF</b>) we downloaded and copied to src folder as <code>src: url("GODOFWAR.TTF") format("woff2");</code></li>
                    <li>In the above configuration step, we are formmating as woff2 as All major browsers support WOFF/WOFF2</li>
                    <li>As a final step, we <code>html</code> tag with <code>font-family</code> property with the value of the name we have given in step 7 </li>

                </ol>
            </section>
        </div>
    );
}

export default Font;