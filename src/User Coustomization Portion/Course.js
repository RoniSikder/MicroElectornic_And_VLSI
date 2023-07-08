import image1 from "../Image Components/Course Pictures/Micro.jpg"
import image2 from "../Image Components/Course Pictures/emb.jpg"

import teacher2 from "../Image Components/Faculty Pictures/Madhumita Das.png"
import teacher3 from "../Image Components/Faculty Pictures/Dr .Mihir Mahata.png"
import teacher4 from "../Image Components/Faculty Pictures/Sabyasachi Sen.png"
import teacher5 from "../Image Components/Faculty Pictures/Dr. Ria Bose.png"
import teacher6 from "../Image Components/Faculty Pictures/Sowvik Dey.png"
import teacher7 from "../Image Components/Faculty Pictures/Tania Das.png"

import embedded from "../Image Components/Embedded Systems.pdf"
import micro from "../Image Components/Microelectronics.pdf"

export const Course = [
    {
        id: 1,
        name: "M.Tech in Embedded Systems and VLSI Design",
        imga: image2,
        syllebus: embedded,
        intro: "M. Tech program in VLSI Design and Embedded Systems covers the fundamentals and engineering aspects of designing and developing IC-based systems. In this course, the students will be able to learn and explore CMOS VLSI Design, Advanced Embedded Systems, VLSI Design and Verification, Design of Analog VLSI circuits, Low-Power VLSI Design, several CAD tools (Xilinx, Cadence etc.), hardware description languages to design the logic of fundamental building blocks as well as the entire system of VLSI Circuits. The students pursuing the course may find opportunities to choose from amongst the sectors of research and development, innovation sectors, VLSI industry and communication sector.",
         phone: [
            "8116384379",
            "7044730650",
            "9883260106"
        ],
        teacher: [
            {
                namea: "Dr. Madhumita Das Sarkar",
                designation: "Associate Professor",
                fa_img:teacher2
            },
            {
                namea: "Dr. Mihir Kumar Mahata",
                designation: "Assistant Professor and HOD",
                fa_img:teacher3
            },
            {
                namea: "Dr. Ria Bose",
                designation: "Assistant Professor",
                fa_img:teacher5
            },
            {
                namea: "Mr. Sabyasachi Sen",
                designation: "Assistant Professor",
                fa_img:teacher4
            },
            {
                namea: "Mr. Sowvik Dey",
                designation: "Assistant Professor",
                fa_img:teacher6
            },
            {
                namea: "Mrs. Tania Das",
                designation: "Assistant Professor",
                fa_img:teacher7
            }
        ],
        duration: "2 Years",
        total_fees: "86,700",
        Semester_fees: "18,000",
        Admission_fees: "14,700",
        campas: "NH12, Haringhata, PO- Simhat, PS- Haringhata, PIN- 741249 "
    },
    {
        id: 2,
        name: "M.Tech in Microelectronics and VLSI Technology",
        imga: image1,
        syllebus: micro,
        intro: "M. Tech program in Microelectronics and VLSI Technology helps students to acquire skill in the design, fabrication and testing of microelectronic and VLSI devices. This cutting-edge programme is an excellent platform for further research in the Nano group and the VLSI Design and Devices group. Besides, the students will be exposed to several aspects of technology such as integrated microelectronics device processing, integrated circuit design, advanced devices such as FinFETs, Tunnel FET, Single Electron Transistor, etc. This programme provides students with proper skills and knowledge, thus, make them to perform efficiently and independently in the VLSI industry.",
        phone: [
            "8116384379",
            "7044730650",
            "9883260106"
        ],
        teacher: [
            {
                namea: "Dr. Madhumita Das Sarkar",
                designation: "Associate Professor",
                fa_img:teacher2
            },
            {
                namea: "Dr. Mihir Kumar Mahata",
                designation: "Assistant Professor and HOD",
                fa_img:teacher3
            },
            {
                namea: "Dr. Ria Bose",
                designation: "Assistant Professor",
                fa_img:teacher5
            },
            {
                namea: "Mr. Sabyasachi Sen",
                designation: "Assistant Professor",
                fa_img:teacher4
            },
            {
                namea: "Mr. Sowvik Dey",
                designation: "Assistant Professor",
                fa_img:teacher6
            },
            {
                namea: "Mrs. Tania Das",
                designation: "Assistant Professor",
                fa_img:teacher7
            }
        ],
        duration: "2 Years",
        total_fees: "86,700",
        Semester_fees: "18,000",
        Admission_fees: "14,700",
        campas: "NH12, Haringhata, PO- Simhat, PS- Haringhata, PIN- 741249"
    }
]