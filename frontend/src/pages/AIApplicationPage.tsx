import AIApplicationForm from "../Components/AIApplicationForm";
import SideBar from "../layouts/sideBarLayout";
import { section } from "../config/providerDashborad";
import VoiceAssistant from "../Components/VoiceAssistance";

function AIApplicationPage() {
  return (
    <div className="flex">
      <SideBar section={section} />
      <AIApplicationForm />
      {/* <VoiceAssistant /> */}
    </div>
  );
}

export default AIApplicationPage;
