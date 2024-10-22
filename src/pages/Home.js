import "../css/style.css";
import FeatureItems from "../components/FeatureItems";
import IconChat from "../images/icon-chat.webp";
import IconMoney from "../images/icon-money.webp";
import IconSecurity from "../images/icon-security.webp";

export default function Home(){
    return(
      <div>
        <div className="hero">  
            <section className="hero-content">
                <h2 className="sr-only">Promoted Content</h2>
                <p className="subtitle">No fees.</p>
                <p className="subtitle">No minimum deposit.</p>
                <p className="subtitle">High interest rates.</p>
                <p className="text">Open a savings account with Argent Bank today!</p>
            </section>
        </div>
        <section className="features">
            <h2 className="sr-only">Features</h2>
            <FeatureItems 
            title="You are our #1 priority"
            paragraphe="Need to talk to a representative? You can get in touch through our
                24/7 chat or through a phone call in less than 5 minutes."
            icon={IconChat}
            />
            <FeatureItems 
            title="More savings means higher rates"
            paragraphe="The more you save with us, the higher your interest rate will be!"
            icon={IconMoney}
           />
            <FeatureItems 
            title="Security you can trust"
            paragraphe="We use top of the line encryption to make sure your data and money
                is always safe."
            icon={IconSecurity}
            />
        </section>
      </div>
    )
}