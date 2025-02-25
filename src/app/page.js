import  Leftnav from './leftnav/page'
import  SideContent from './sideContent/page'
import Style from './page.module.css'
export default function Home() {
  return (
   <div className={Style.display}>
   <Leftnav/>
   <SideContent/>
   </div>
  );
}
