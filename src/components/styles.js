const Paper = () => {
    return (
      <pre>
        {`
  .main {
    text-align: justify;
    padding: 10px;
  }
  
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
  }
  
  .left-half {
    font-size: 16px;
    font-weight: 400;
    border: 0;
    padding: 20px;
    font-family: 'Verdana, Geneva, Tahoma, sans-serif';
    color: olive;
  }
  
  .right-half {
    border: 0;
    padding: 20px;
    font-family: 'Times New Roman', Times, serif;
    font-size: larger;
    font-weight: 100;
    color: teal;
  }
  
  h1 {
    color: white;
    background-color: black;
    padding: auto;
    margin: auto;
    text-align: center;
    font-style: normal;
    font-weight: bold;
    font-family: 'Arial, sans-serif';
    font-size: xx-large;
  }
  
  h2 {
    color: orangered;
    background-color: black;
    padding: auto;
    margin: auto;
    text-align: center;
  }
  
  .author-name {
    text-align: center;
    margin-top: 50px;
    margin-bottom: 70px;
    text-decoration: underline;
    font-style: normal;
    font-weight: bold;
    font-family: 'Arial, sans-serif';
    font-size: x-large;
    color: chocolate;
  }
  
  .citations {
    font-style: normal;
    font-weight: 400;
    margin-bottom: 30px;
  }
  
  p > a {
    text-decoration: none;
    transition: opacity 0.3s;
  }
  
  p > a:hover {
    color: rgb(11, 179, 217);
    text-decoration: underline;
    font-size: 1.2em;
    opacity: 1;
  }
  
  .article-info {
    font-style: normal;
    font-weight: 400;
    margin-bottom: 40px;
  }
  
  .abst-ract {
    font-style: italic;
    font-weight: 600;
    font-family: 'Courier New, monospace';
    margin-bottom: 40px;
    color: yellowgreen;
  }
        `}
      </pre>
    );
  };
  
  export default Paper;
  