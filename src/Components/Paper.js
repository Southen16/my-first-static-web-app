import "./Paper.css";
import pic from './1.png';

const Paper = () => {
  return (
    <div className="main">
      <img src={pic} />
      <article>
        <h1>IoT Based Patient Health Monitoring System</h1>
        <p>
          Y. Sowjanya | Nama Southen Kumar | Diviti Sandeep | Gummadi
          Harivardhan Reddy
        </p>
        <p>
          <b>To Cite this Article</b>
          <br />
          Y. Sowjanya, Nama Southen Kumar, Diviti Sandeep, and Gummadi
          Harivardhan Reddy. IoT Based Patient Health Monitoring System.
          International Journal for Modern Trends in Science and Technology
          2022, 8(05), pp. 118-122.{" "}
          <a href="https://doi.org/10.46501/IJMTST0805019">
            https://doi.org/10.46501/IJMTST0805019
          </a>
        </p>
        <p>
          <b>Article Info</b>
          <br />
          Received: 30 March 2022; Accepted: 02 May 2022; Published: 04 May
          2022.
        </p>
        <hr /> {/* Added a '/' to self-close the <hr> tag */}
        <h2>ABSTRACT</h2>
        <p>
          <b>
            <i>
              There have been attempts to use modern technology in numerous
              sectors to improve the quality of human life as technology has
              improved and sensors have been miniaturized. One main area of
              research that has been seen is the adoption of technology in the
              healthcare sector. People who require healthcare services find
              them to be prohibitively expensive, which is especially true in
              poor countries. As a result, this initiative is an attempt to
              address a contemporary healthcare issue in society. The main goal
              of the project was to develop a telemedicine system. The first
              phase was to use sensors to detect the patient's vital signs, the
              second was to send the data to cloud storage, and the third was to
              make the data available for remote viewing. The data may be seen
              remotely, allowing a doctor or guardian to keep track of a
              patient's health status while they are not on the hospital
              premises.
              <br />
              Keywords: Healthcare monitoring system, Internet of things,
              Sensors, ESP32
            </i>
          </b>
        </p>
        <hr /> {/* Added a '/' to self-close the <hr> tag */}
      </article>
      <div className="container">
        <div className="right-half">
          <article>
            <p>
              <b>1. INTRODUCTION</b> The absence of competent medical facilities
              in a growing country like India has long been a source of worry,
              particularly in distant communities. In rural areas, there is a
              lack of competent medical care and diagnosis. This is mostly owing
              to the low doctor-to-patient ratio in these locations. There is a
              need to improve patient care effectiveness. Improve the
              effectiveness of the patient monitoring system. The existing
              patient monitoring system has one major flaw: the necessity that
              the doctor is physically present in the room. It is not always
              practical to be near the patient. Hence, it becomes vital to
              create a system that does not rely on humans. Patient monitoring
              requires the presence of the doctor. Because of developments in
              bio-instrumentation and bio-informatics. Because of advancements
              in telecommunications technology, it is now possible to create a
              monitoring system by using IoT-based devices like Arduino, the
              ESP32 Wi-Fi module, LCD screen, and others. This system can be
              very helpful for the continuous monitoring of the patient. A
              doctor can advise the patient from the phone. This system has a
              low cost of implementation. A feasibility study is an analysis
              that considers all of a project's relevant factors, including
              economic, technical, legal, and scheduling considerations to
              ascertain the likelihood of completing the project successfully.
            </p>
            <p>
              <b>2. PROBLEM STATEMENT</b>
              <br />
              In the absence of doctors, the patient is unable to consult them,
              potentially resulting in an emergency scenario. Each person’s
              particular health is being monitored.
            </p>
            <p>
              <b>3. PROPOSED METHODOLOGY</b>
              <br />
              The main aim of IoT based patient health monitoring system is to
              continuously track and monitor patient Oxygen (SPO2), Pulse,
              Temperature and provide information to doctors, nurses, and other
              caretakers. It has an inbuilt keypad with default functions that
              patients can use it and can take help in any emergency. Health
              Monitoring System can be operated and controlled either by a
              mobile phone or manually from any location. This system makes it
              easy to check on the status of the patient and also provides data
              for doctors, patients, nurses, and caretakers.
            </p>
            <p>
              <b>4. REQUIREMENTS SPECIFICATIONS</b>
              <br />
              <i>i) ARDUINO MEGA</i>
              <br />
              <b> The Arduino Mega 2560</b> is a microcontroller board based on
              the ATmega2560. It has 54 digital input/output pins (of which 15
              can be used as PWM outputs), 16 analog inputs, 4 UARTs (hardware
              serial ports), a 16 MHz crystal oscillator, a USB connection, and
              a power jack, an ICSP header, and a reset button. It contains
              everything needed to support the microcontroller; simply connect
              it to a computer with a USB cable or power it with an AC-to-DC
              adapter or battery to get started. The Mega 2560 board is
              compatible with most shields designed for the Uno and the former
              boards Duemilanove or Diecimila.
            </p>
            <p>
              <b> ii) PULSE SENSOR </b>The Pulse Sensor is a plug-and-play
              heart-rate sensor for Arduino. It can be used by students,
              artists, athletes, makers, and game &amp; mobile developers who
              want to easily incorporate live heart-rate data into their
              projects. The essence is an integrated optical amplifying circuit
              and noise-eliminating circuit sensor. Clip the Pulse Sensor to
              your earlobe or fingertip. Then it into your Arduino, you are now
              ready to read heart rate.
            </p>
            <p>
              <b>5. CONCLUSION </b>The main objective of the experiment was
              successfully achieved. All the individual modules like Heartbeat
              detection module, fall detection module etc. and remote viewing
              module gave out the intended results. 55 The designed system
              modules can further be optimized and produced to a final single
              circuit. More important fact that came up during project design is
              that all the circuit components used in the remote health
              detection system are available easily. With the development in the
              integrated circuit industry, Micro Electro Mechanical Systems
              (MEMs) and microcontrollers have become affordable, have increased
              processing speeds, miniaturized and power efficient. This has led
              to increased development of embedded systems that the healthcare
              specialists are adopting. These embedded systems have also been
              adopted in Smartphone technology. And with increased internet
              penetration in most developing countries through mobile phones,
              and with use of the Internet of things (IoT) will become adopted
              at a faster rate. The Remote Health Care system utilizes these
              concepts to come up with a system for a better quality of life for
              people in society.
            </p>
          </article>
        </div>
        <div className="left-half">
          <article>
            <p>
              <b> iii) TEMPERATURE AND HUMIDITY SENSOR DHT22</b> capacitive
              humidity sensing digital temperature and humidity module contain
              the compound has been that calibrated digital signal output of the
              temperature and humidity sensors. Application of a dedicated
              digital modules collection technology and the temperature and
              humidity sensing technology, to ensure that the product has high
              reliability and excellent long-term stability
            </p>
            <p>
              <b> iv) SPO2 Sensor MAX30100 </b>is an integrated pulse oximeter
              and heart-rate monitor sensor solution.It’s an optical sensor that
              derives its readings from emitting two wavelengths of light from
              two LEDs – a red and an infrared one – then measuring the
              absorbance of pulsing blood through a photodetector. This
              particular LED color combination is optimized for reading the data
              through the tip of one’s finger. It is fully configurable through
              software registers and the digital output data is stored in a 16-
              deep FIFO within the device. It has an I2C digital interface to
              communicate with a host microcontroller.
            </p>
            <p>
              <b> v) 4*4 KEYPAD</b> 4×3 Matrix Membrane Keypad is high-quality
              soft-touch feeling button keypad with 100 million life-stroke
              lifespans and good resistance to environmental conditions. It is a
              high-quality product at a very low cost for your application
              needs. This 12-button keypad provides a useful human interface
              component for microcontroller projects. Convenient adhesive
              backing provides a simple way to mount the keypad in a variety of
              applications. The Keypad 4×3 features a total of 12 buttons in
              Matrix form. This is a membrane keypad with no moving parts. A
              female 7-pin berg connector is required for interfacing it with
              your microcontroller circuits.
            </p>
            <p>
              vi)<b> LCD Display </b>This is a basic 16-character by 2-line
              Alphanumeric display. Black text on a Green background. Utilizes
              the extremely common HD44780 parallel interface chipst . Interface
              code is freely available. You will need Minimumof 6 general I/O
              pins to interface to this LCD screen. Includes LED backlight.
              Works in 4bit and 8 bit Mode.
            </p>
            <p>
              vii)<b> ESP32 Module </b>ESP32 Development board is based on the
              ESP WROOM32 WIFI + BLE Module. Its a low-footprint, minimal system
              development board powered by the latest ESP-WROOM-32 module and
              can be easily inserted into a solderless breadboard. It contains
              the entire basic support circuitry for the ESP-WROOM-32, including
              the USB-UART bridge, reset- and boot-mode buttons, LDO regulator,
              and a micro-USB connector. Every important GPIO is available to
              the developer.
            </p>
            <p>
              <b>viii) GPS GPRS Module</b> SIM900A Modem is built with Dual Band
              GSM-based SIM900A modem from SIMCOM. It works on frequencies
              900MHz. SIM900A can search these two bands automatically The
              frequency bands can also be set by AT Commands. The baud rate is
              configurable from 1200- 115200 through AT command. SIM900A is an
              ultra-compact and wireless module. The Modem is coming interface,
              which allows you to connect PC as well a as microcontroller with
              RS232 Chip(MAX232). It is suitable for SMS, Voice as well as DATA
              transfer applications in the M2M interface. The onboard Regulated
              Power supply allows you to connect a wide range of unregulated
              power supplies. Using this modem, you can make audio calls, SMS,
              Read SMS, attend the incoming , etc. etc. through simple AT
              commands.
            </p>
            <h3>REFERENCES</h3>
            <p>
              [1] “Arduino Architecture”
              <a href="https://www.engineersgarage.com/what-is-gsm-gprs-module">
                https://www.engineersgarage.com/what-is-gsm-gprs-module
              </a>
              [Oct. 1, 2017]
            </p>
            <p>
              [2] “Systems design”{" "}
              <a href="https://en.wikipedia.org/wiki/Systems_design">
                https://en.wikipedia.org/wiki/Systems_design
              </a>
              [Oct. 15, 2017]
            </p>
            <p>
              [3] “UML - Standard Diagrams”
              <a href="https://www.tutorialspoint.com/uml/uml_standard_diagrams.html">
                https://www.tutorialspoint.com/uml/uml_standard_diagrams.html
              </a>{" "}
              [Oct. 18, 2017]
            </p>
            <p>
              [4] “The Internet of Things in healthcare: an overview”
              <a href=" https://scholar.google.com/citations?user=Y4opLB8AAAAJ&amp;">
                https://scholar.google.com/citations?user=Y4opLB8AAAAJ&amp;
              </a>{" "}
              hl=en [Sept. 7, 2017]
            </p>
            <p>
              [5] “Envisioning inclusive futures: technology-based assistive
              sensory and action substitution”
              <a href="https://www.infona.pl/resource/bwmeta1.element.elsevier-3d45bf">
                https://www.infona.pl/resource/bwmeta1.element.elsevier-3d45bf
              </a>
              dd-fe55-359f-84e4-674a21cae024 [Sept 4, 2017]
            </p>
          </article>
        </div>
      </div>
      <hr /> {/* Added a '/' to self-close the <hr> tag */}
      <div className="addendum">
  <h3>Addendum: HTML Tags Explanation</h3>
  <p>
    In this document, we have utilized various HTML tags to structure and format the content effectively. Each tag serves a specific purpose to ensure readability and proper organization.
  </p>
  <ul>
    <li>
      <b>&lt;article&gt;:</b> The &lt;article&gt; tag is used to define a self-contained and independently distributable piece of content within the document. It is often used for articles, blog posts, or any content that can stand alone.
    </li>
    <li>
      <b>&lt;h1&gt;, &lt;h2&gt;:</b> Heading tags, such as &lt;h1&gt; and &lt;h2&gt;, are used to define headings and subheadings within the document. They help structure the content hierarchically, with &lt;h1&gt; being the highest level and &lt;h2&gt; being a subheading.
    </li>
    <li>
      <b>&lt;p&gt;:</b> The &lt;p&gt; tag is employed to create paragraphs of text. It is fundamental for structuring and formatting textual content on web pages.
    </li>
    <li>
      <b>&lt;hr&gt;:</b> The &lt;hr&gt; tag is used to insert a horizontal line or thematic break in the content. It can be used to separate sections visually.
    </li>
    <li>
      <b>&lt;a&gt;:</b> The &lt;a&gt; tag is used for creating hyperlinks or anchor links. It allows users to navigate between web pages or access external resources.
    </li>
    <li>
      <b>&lt;div&gt;:</b> The &lt;div&gt; tag is a versatile container element used for grouping and structuring content. It is often styled using CSS for layout and formatting purposes.
    </li>
    <li>
      <b>&lt;b&gt; and &lt;i&gt;:</b> The &lt;b&gt; and &lt;i&gt; tags are used to apply bold and italic formatting to text, respectively. They help emphasize specific content.
    </li>
    <li>
      <b>&lt;ul&gt; and &lt;li&gt;:</b> The &lt;ul&gt; (unordered list) and &lt;li&gt; (list item) tags are used to create lists. &lt;ul&gt; defines an unordered list, while &lt;li&gt; defines each list item within the list.
    </li>
  </ul>
  <p>
    These HTML tags play a crucial role in structuring, formatting, and presenting the content of this document in a well-organized manner, ensuring readability and accessibility for readers.
  </p>
</div>
    </div>
  );
};

export default Paper;
