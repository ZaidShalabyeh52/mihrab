import GreenButton from "./buttons/GreenButton";
import { Box } from "@mui/material";

const ControlPanelInfo = [
  {
    title: "إدارة المعلمين",
    buttons: [
      <GreenButton text="عرض كل المعلمين" link="teachers" />,
      <GreenButton text="عرض طلبات المعلمين المعلقة" link="teacher-requests" />,
    ],
  },
  {
    title: "إدارة الطلاب",
    buttons: [
      <GreenButton text="تفاصيل طالب" link="student-requests" />,
      <GreenButton text="عرض كل الطلاب" link="students" />,
    ],
  },
  {
    title: "إدارة الشعب",
    buttons: [<GreenButton text="عرض كل الشعب" link="classes" />],
  },

  {
    title: "سجلات التسميع",
    buttons: [<GreenButton text="عرض كل سجلات التسميع" link="records" />],
  },
];

function ControlPanel() {
  return (
    <section className="flex justify-end bg-gradient-bg w-full h-175 p-4 pr-6 font-[cairo]">
      {/* Outside Border */}
      <div className="bg-gradient-gold rounded-[14px] p-1 h-fit">
        {/* Space between the two borders */}
        <div className="bg-gradient-bg rounded-xl p-1">
          {/* Inside Border */}
          <div className="bg-gradient-gold rounded-xl p-1">
            <main className="flex flex-col items-center justify-start bg-gradient-bg rounded-[10px] w-75 h-fit p-2">
              <Box
                sx={{
                  background: (theme) =>
                    `${theme.gradients.background} padding-box, ${theme.gradients.gold} border-box`,
                  border: "4px solid transparent",
                  borderRadius: "8px",
                  width: "100%",
                  padding: "5px",
                  //  background: (theme) => theme.gradients.background,
                }}
              >
                <div className="middle p-2 m-2 bg-gradient-gold text-white font-bold text-[24px] rounded-lg shadow-md h-auto w-full">
                  لوحة التحكم
                </div>
              </Box>
              {ControlPanelInfo.map((item) => (
                <section className="middle flex-col gap-2 w-full pt-4">
                  <p className="flex justify-end w-full font-bold text-lg pr-2">
                    {" "}
                    {item.title}
                  </p>

                  <section
                    className={`middle ${item.title === "إدارة المعلمين" ? "flex-col" : "flex-row"} gap-2 w-full`}
                  >
                    {item.buttons.map((button) => (
                      <div className="middle gap-2 w-full cairo"> {button}</div>
                    ))}
                  </section>
                </section>
              ))}
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ControlPanel;
