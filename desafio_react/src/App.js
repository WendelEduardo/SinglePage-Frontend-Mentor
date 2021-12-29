import './App.css';
import Buttons from './Components/Buttons';
import Buttons_color from './Components/Buttons_other_color'
import Title from './Components/Title';
import Text from './Components/Text';
import Title_h2 from './Components/Title_h2'
import Title_h3 from './Components/Title_h3'
import Small_Text from './Components/Small_Text'
import Footer from './Components/Footer'

// <IMAGES>
import Logo from './Images/logo.svg'
import Computer from './Images/image-computer.png'
import Devices from './Images/image-devices.png'
import blacklist from './Images/icon-blacklist.svg'
import icon_text from './Images/icon-text.svg'
import icon_preview from './Images/icon-preview.svg'

import icon_google from './Images/logo-google.png'
import icon_ibm from './Images/logo-ibm.png'
import icon_microsoft from './Images/logo-microsoft.png'
import icon_hp from './Images/logo-hp.png'
import logo_vector from './Images/logo-vector-graphics.png'
// <IMAGES/>


function App() {
  return (
    <div className="App">
      <section id="header_page" className="header_page">
        <div className="header_page_conteud">
          <img src={Logo} alt="Logo" className="logo_c" />

          <Title titulo="A history of everything you copy" />

          <Text conteudo="Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices." />

          <div className="group_buttons">
            <a href="#snippets">
              <Buttons texto="Download for iOS" />
            </a>
            
            <a href="#Clipboard">
              <Buttons_color texto="Download for Mac" />
            </a>
            
          </div>
        </div>
      </section>



      <section id="snippets" className="conteud snippets">
        <div className="Title_Subtitle_snippets">
          <Title_h2 titulo="Keep track of your snippets" />
          <Text conteudo="Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything." />
        </div>

        <div className="image__boxes">
          <div className="Image_snippets">
            <img src={Computer} alt="Logo" />
          </div>

          <div className="boxes">
            <div className="box">
              <Title_h3 titulo="Quick Search" />
              <Small_Text conteudo="Easily search your snippets by content, category, web address, application, and more." />
            </div>


            <div className="box">
              <Title_h3 titulo="iCloud Sync" />
              <Small_Text conteudo="Instantly saves and syncs snippets across all your devices." />
            </div>

            <div className="box">
              <Title_h3 titulo="Complete History" />
              <Small_Text conteudo="Retrieve any snippets from the first moment you started using the app." />
            </div>
          </div>
        </div>
      </section>


      <section id="Clipboard" className="conteud Clipboard ">
        <div className="Clipboard_Title_text">
          <Title_h2 titulo="Access Clipboard Anywhere" />
          <Text conteudo="Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks." />
        </div>

        <img src={Devices} alt="Logo" />
      </section>


      <section id="workflow" className="conteud workflow ">
        <div className="workflow_Title_text">
          <Title_h2 titulo="Supercharge your workflow" />
          <Text conteudo="We’ve got the tools to boost your productivity." />
        </div>

        <div className="group_flexible">
          <div className="flexible">
            <img src={blacklist} alt="Logo" />
            <Title_h3 titulo="Create blacklists" />
            <Text conteudo="Ensure sensitive information never makes its way to your clipboard by excluding certain sources." />
          </div>
          <div className="flexible">
            <img src={icon_text} alt="Logo" />
            <Title_h3 titulo="Plain text snippets" />
            <Text conteudo="Remove unwanted formatting from copied text for a consistent look." />
          </div>
          <div className="flexible">
            <img src={icon_preview} alt="Logo" />
            <Title_h3 titulo="Sneak preview" />
            <Text conteudo="Quick preview of all snippets on your Clipboard for easy access." />
          </div>
        </div>
      </section>


      <section id="brands" className="brands">
        <img src={icon_google} alt="Logo" />
        <img src={icon_ibm} alt="Logo" />
        <img src={icon_microsoft} alt="Logo" />
        <img src={icon_hp} alt="Logo" />
        <img src={logo_vector} alt="Logo" />
      </section>


      <section id="iOS_and_Mac" className="iOS_and_Mac">
        <div className="iOS_and_Mac_conteud">
          <Title titulo="Clipboard for iOS and Mac OS" />

          <div className="IOS_and_Mac_subtitle">
            <Text conteudo="Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard.." />
          </div>

          <div className="group_buttons">
            <a href="#snippets">
              <Buttons texto="Download for iOS" />
            </a>
            
            <a href="#Clipboard">
              <Buttons_color texto="Download for Mac" />
            </a>
          </div>
        </div>
      </section>
      
      <Footer id="footer" />
    </div>
  );
}

export default App;