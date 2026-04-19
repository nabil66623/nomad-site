export default function NomadCoLiveSite() {
  const timeline = [
    { period: "2001–2002", name: "Main St. Mart", location: "Albany, NY", role: "Owner / Operator", result: "Scaled operations and sold successfully." },
    { period: "2002–2005", name: "NY Pizza & Deli", location: "Hartford, CT", role: "Owner / Operator", result: "Improved performance, scaled, and exited profitably." },
    { period: "2006–2008", name: "Food Mart", location: "Emporia, VA", role: "Owner / Operator", result: "Strengthened operations and sold with profit." },
    { period: "2008–2010", name: "A&S Food", location: "7600 S Exchange, Chicago, IL", role: "Ownership Partner", result: "Bought into ownership, scaled performance, and exited." },
    { period: "2010–2013", name: "Linden Food Mart", location: "Linden, AL", role: "Co-Founder / Operator", result: "Built the operation and sold successfully." },
    { period: "2012–2013", name: "Screamers Restaurant", location: "Linden, AL", role: "Operator", result: "Despite a failed concept, exited with profit." },
    { period: "2013–2015", name: "Broadway Autosports", location: "North Little Rock, AR", role: "Operator", result: "Scaled into an elite-performing sales operation." },
    { period: "2015–2016", name: "Agricultural Investment Venture", location: "Eugene, OR", role: "Financial Investor", result: "Strategic investment in a regulated agricultural operation, resulting in a profitable exit." },
    { period: "2016–2018", name: "Skewers Mediterranean Restaurant", location: "Lexington, KY", role: "Founder / Operator", result: "Built, stabilized, and sold with profit." },
    { period: "2018–2019", name: "Linden Food Mart", location: "Linden, AL", role: "Operator", result: "Worked through legal and operational challenges." },
    { period: "2019–2023", name: "Broadway Autosports", location: "Arkansas", role: "Operator", result: "Rebuilt, scaled, and sold successfully." },
  ];

  const activeVentures = [
    { name: "Southwind Auto LLC", status: "Active", description: "Founder-led automotive business currently in operation." },
    { name: "Downtown Smoke & Convenience", status: "Optimizing", description: "Active retail business in Raleigh undergoing repositioning and operational improvement." },
    { name: "Bayt Al Mocha", status: "Pending 2026", description: "Premium Yemeni coffee concept positioned for strategic expansion." },
  ];

  const services = [
    { title: "Operate", description: "Hands-on execution inside real businesses that need leadership, structure, and discipline." },
    { title: "Optimize", description: "Operational consulting focused on revenue, margin, workflow, and performance improvement." },
    { title: "Optimize & Scale", description: "Systems and strategy designed to increase value and build businesses that can grow beyond the operator." },
  ];

  return (
    <main style={{minHeight:"100vh",background:"#09090a",color:"#f5ecdd",fontFamily:'Georgia, "Times New Roman", serif'}}>
      <section style={{borderBottom:"1px solid #2d2418",padding:"72px 24px",background:"radial-gradient(circle at top, rgba(198,165,106,.18), transparent 30%)"}}>
        <div style={{maxWidth:1200,margin:"0 auto",display:"grid",gap:40,gridTemplateColumns:"1.1fr .9fr"}}>
          <div>
            <div style={{display:"inline-block",border:"1px solid #6f5a34",borderRadius:999,padding:"8px 14px",fontSize:12,letterSpacing:"0.35em",textTransform:"uppercase",color:"#c6a56a",background:"#141416"}}>Nomad Co.</div>
            <h1 style={{fontSize:"clamp(44px,7vw,88px)",lineHeight:1.05,margin:"22px 0 0"}}>Legacy in Motion</h1>
            <p style={{maxWidth:760,fontSize:22,lineHeight:1.6,color:"#d2c5af",marginTop:24,fontFamily:'system-ui, -apple-system, Segoe UI, sans-serif'}}>
              Operational Consulting &amp; Business Optimization across markets. Built through movement,
              proven through execution, and shaped by a track record of building, improving, and exiting businesses across 10+ cities.
            </p>
            <div style={{display:"flex",gap:16,flexWrap:"wrap",marginTop:28}}>
              <a href="#portfolio" style={{background:"#c6a56a",color:"#111",padding:"14px 22px",borderRadius:16,textDecoration:"none",fontFamily:'system-ui, -apple-system, sans-serif',fontWeight:600}}>View Portfolio</a>
              <a href="#contact" style={{border:"1px solid #4c4335",color:"#f5ecdd",padding:"14px 22px",borderRadius:16,textDecoration:"none",fontFamily:'system-ui, -apple-system, sans-serif',fontWeight:600}}>Contact Nomad Co.</a>
            </div>
          </div>
          <div>
            <div style={{border:"1px solid #55452b",borderRadius:32,padding:24,background:"linear-gradient(180deg,#151517,#0d0d0e)",boxShadow:"0 10px 40px rgba(0,0,0,.45)"}}>
              <div style={{border:"1px solid #3a3125",borderRadius:24,padding:28,background:"#111214"}}>
                <div style={{width:96,height:96,borderRadius:"50%",border:"1px solid #7c643a",display:"grid",placeItems:"center",margin:"0 auto",color:"#c6a56a",fontSize:38}}>✦</div>
                <div style={{textAlign:"center",marginTop:24}}>
                  <div style={{fontSize:42,letterSpacing:".12em"}}>NOMAD CO.</div>
                  <div style={{marginTop:10,fontSize:12,letterSpacing:".32em",textTransform:"uppercase",color:"#c6a56a",fontFamily:'system-ui, -apple-system, sans-serif'}}>Operational Consulting &amp; Business Optimization</div>
                  <div style={{height:1,margin:"22px 0",background:"linear-gradient(to right, transparent, #7a6237, transparent)"}} />
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,textAlign:"left",fontSize:14,color:"#d2c5af",fontFamily:'system-ui, -apple-system, sans-serif'}}>
                    {["Built across 10+ cities","Operator-led execution","Multi-industry experience","Optimize & Scale mindset"].map((t)=>(
                      <div key={t} style={{border:"1px solid #302a22",background:"#151517",borderRadius:16,padding:14}}>{t}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{maxWidth:1200,margin:"0 auto",padding:"70px 24px",display:"grid",gap:40,gridTemplateColumns:"1.1fr .9fr"}}>
        <div>
          <div style={{fontSize:12,letterSpacing:".35em",textTransform:"uppercase",color:"#c6a56a",fontFamily:'system-ui, -apple-system, sans-serif'}}>About</div>
          <h2 style={{fontSize:"clamp(34px,5vw,60px)",margin:"16px 0 0"}}>Built through movement. Proven through execution.</h2>
          <p style={{maxWidth:760,fontSize:20,lineHeight:1.7,color:"#d2c5af",marginTop:24,fontFamily:'system-ui, -apple-system, sans-serif'}}>
            Nomad Co. is built on real-world experience across retail, food service, automotive, and investment-backed ventures.
            Every market brought a new challenge. Every challenge built a sharper system.
          </p>
          <p style={{maxWidth:760,fontSize:20,lineHeight:1.7,color:"#d2c5af",marginTop:18,fontFamily:'system-ui, -apple-system, sans-serif'}}>
            This is not theory-driven consulting. It is operator-led strategy shaped by hands-on ownership, management, performance improvement, and profitable exits.
          </p>
        </div>
        <div style={{border:"1px solid #2f281e",background:"#101113",borderRadius:28,padding:28,boxShadow:"0 10px 30px rgba(0,0,0,.28)"}}>
          <div style={{fontSize:12,letterSpacing:".35em",textTransform:"uppercase",color:"#c6a56a",fontFamily:'system-ui, -apple-system, sans-serif'}}>Operating Method</div>
          <div style={{marginTop:22,display:"grid",gap:14}}>
            {["Enter with clarity","Operate with discipline","Improve performance","Build lasting value"].map((item)=>(
              <div key={item} style={{border:"1px solid #302920",background:"#141517",borderRadius:18,padding:"16px 18px",fontSize:22}}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" style={{borderTop:"1px solid #242019",borderBottom:"1px solid #242019",background:"#0d0e10"}}>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"70px 24px"}}>
          <div style={{maxWidth:860,marginBottom:38}}>
            <div style={{fontSize:12,letterSpacing:".35em",textTransform:"uppercase",color:"#c6a56a",fontFamily:'system-ui, -apple-system, sans-serif'}}>Portfolio</div>
            <h2 style={{fontSize:"clamp(34px,5vw,60px)",margin:"16px 0 0"}}>An operator track record built across decades.</h2>
            <p style={{fontSize:20,lineHeight:1.7,color:"#d2c5af",marginTop:22,fontFamily:'system-ui, -apple-system, sans-serif'}}>
              From corner stores and restaurants to automotive ventures and investment-backed opportunities, this portfolio reflects a long-term pattern of entering businesses, improving operations, and creating value.
            </p>
          </div>

          <div style={{display:"grid",gap:18}}>
            {timeline.map((item)=>(
              <div key={item.period + item.name} style={{display:"grid",gap:20,gridTemplateColumns:"180px 1fr",border:"1px solid #2d271e",background:"#111214",borderRadius:28,padding:28,boxShadow:"0 10px 24px rgba(0,0,0,.2)"}}>
                <div style={{fontSize:12,letterSpacing:".25em",textTransform:"uppercase",color:"#c6a56a",fontFamily:'system-ui, -apple-system, sans-serif'}}>{item.period}</div>
                <div>
                  <div style={{display:"flex",justifyContent:"space-between",gap:18,alignItems:"end",flexWrap:"wrap"}}>
                    <h3 style={{fontSize:30,margin:0}}>{item.name}</h3>
                    <div style={{fontSize:12,letterSpacing:".18em",textTransform:"uppercase",color:"#bda173",fontFamily:'system-ui, -apple-system, sans-serif'}}>{item.location}</div>
                  </div>
                  <div style={{fontSize:12,letterSpacing:".18em",textTransform:"uppercase",color:"#9f8862",marginTop:10,fontFamily:'system-ui, -apple-system, sans-serif'}}>{item.role}</div>
                  <p style={{fontSize:18,lineHeight:1.7,color:"#d2c5af",marginTop:16,fontFamily:'system-ui, -apple-system, sans-serif'}}>{item.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{maxWidth:1200,margin:"0 auto",padding:"70px 24px"}}>
        <div style={{maxWidth:860,marginBottom:30}}>
          <div style={{fontSize:12,letterSpacing:".35em",textTransform:"uppercase",color:"#c6a56a",fontFamily:'system-ui, -apple-system, sans-serif'}}>Services</div>
          <h2 style={{fontSize:"clamp(34px,5vw,60px)",margin:"16px 0 0"}}>What Nomad Co. brings to the table.</h2>
        </div>
        <div style={{display:"grid",gap:20,gridTemplateColumns:"repeat(3, 1fr)"}}>
          {services.map((service)=>(
            <div key={service.title} style={{border:"1px solid #312a20",background:"linear-gradient(180deg,#171719,#111214)",borderRadius:32,padding:30,boxShadow:"0 10px 30px rgba(0,0,0,.28)"}}>
              <div style={{width:40,height:40,borderRadius:12,border:"1px solid #715b33",background:"#181818",marginBottom:20}} />
              <h3 style={{fontSize:32,margin:0}}>{service.title}</h3>
              <p style={{fontSize:18,lineHeight:1.7,color:"#cfc1ab",marginTop:16,fontFamily:'system-ui, -apple-system, sans-serif'}}>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{borderTop:"1px solid #242019",borderBottom:"1px solid #242019",background:"#0c0d0f"}}>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"70px 24px"}}>
          <div style={{maxWidth:860,marginBottom:30}}>
            <div style={{fontSize:12,letterSpacing:".35em",textTransform:"uppercase",color:"#c6a56a",fontFamily:'system-ui, -apple-system, sans-serif'}}>Current & Next</div>
            <h2 style={{fontSize:"clamp(34px,5vw,60px)",margin:"16px 0 0"}}>Active ventures and the next phase of growth.</h2>
          </div>
          <div style={{display:"grid",gap:20,gridTemplateColumns:"repeat(3, 1fr)"}}>
            {activeVentures.map((venture)=>(
              <div key={venture.name} style={{border:"1px solid #302920",background:"#101113",borderRadius:32,padding:30,boxShadow:"0 10px 30px rgba(0,0,0,.28)"}}>
                <div style={{fontSize:12,letterSpacing:".25em",textTransform:"uppercase",color:"#c6a56a",fontFamily:'system-ui, -apple-system, sans-serif'}}>{venture.status}</div>
                <h3 style={{fontSize:32,margin:"18px 0 0"}}>{venture.name}</h3>
                <p style={{fontSize:18,lineHeight:1.7,color:"#cfc1ab",marginTop:16,fontFamily:'system-ui, -apple-system, sans-serif'}}>{venture.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{maxWidth:980,margin:"0 auto",padding:"70px 24px",textAlign:"center"}}>
        <div style={{fontSize:12,letterSpacing:".35em",textTransform:"uppercase",color:"#c6a56a",fontFamily:'system-ui, -apple-system, sans-serif'}}>Philosophy</div>
        <div style={{marginTop:28,display:"grid",gap:18,fontSize:"clamp(30px,4vw,56px)",lineHeight:1.18}}>
          <div>Movement isn’t chaos. It’s strategy.</div>
          <div>Value isn’t found. It’s built.</div>
          <div>Legacy isn’t tied to one place. It’s built in motion.</div>
        </div>
      </section>

      <section id="contact" style={{maxWidth:1200,margin:"0 auto",padding:"0 24px 80px"}}>
        <div style={{border:"1px solid #4a3b23",background:"linear-gradient(180deg,#171718,#0e0e10)",borderRadius:32,padding:"40px 28px",textAlign:"center",boxShadow:"0 14px 40px rgba(0,0,0,.35)"}}>
          <div style={{fontSize:12,letterSpacing:".35em",textTransform:"uppercase",color:"#c6a56a",fontFamily:'system-ui, -apple-system, sans-serif'}}>Contact</div>
          <h2 style={{fontSize:"clamp(34px,5vw,56px)",margin:"16px 0 0"}}>Ready to optimize and build lasting value?</h2>
          <p style={{maxWidth:840,margin:"22px auto 0",fontSize:20,lineHeight:1.7,color:"#d2c5af",fontFamily:'system-ui, -apple-system, sans-serif'}}>
            For consulting, partnerships, and business opportunities, connect directly with Nomad Co.
          </p>
          <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:18,marginTop:28,fontSize:18,fontFamily:'system-ui, -apple-system, sans-serif'}}>
            <div>(984) 800 6947</div>
            <div>•</div>
            <a href="mailto:nabil@nomadscorp.co" style={{color:"#f5ecdd",textDecoration:"none"}}>nabil@nomadscorp.co</a>
            <div>•</div>
            <a href="https://www.nomadscorp.co" style={{color:"#f5ecdd",textDecoration:"none"}}>nomadscorp.co</a>
          </div>
        </div>
      </section>
    </main>
  );
}
