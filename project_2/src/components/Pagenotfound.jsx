import { useNavigate } from "react-router-dom";

const Pagenotfound = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-pink-100 h-screen w-screen overflow-hidden">
      <img
        onClick={() => navigate(-1)}
        className="h-screen w-screen object-cover"
        src="https://1.bp.blogspot.com/-5zi8pbheGp0/YAcPf87PvTI/AAAAAAAAAPg/Im1NgHaeN4Q00L5a5zAP8_q09U2EVZskwCLcBGAsYHQ/s1600/preview.gif"
        alt=""
      />
    </div>
  );
};

export default Pagenotfound;
