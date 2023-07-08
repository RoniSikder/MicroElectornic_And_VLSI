import i1 from "../Image Components/Lab Pictures/lab1.jpeg";
import i2a from "../Image Components/Lab Pictures/lab2a.jpeg";
import i2b from "../Image Components/Lab Pictures/lab2b.jpeg";
import i2c from "../Image Components/Lab Pictures/lab2c.jpeg";
import i3a from "../Image Components/Lab Pictures/lab3a.jpeg";
import i3b from "../Image Components/Lab Pictures/lab3b.jpeg";
import i3c from "../Image Components/Lab Pictures/lab3c.jpeg";
import i4 from "../Image Components/Lab Pictures/lab3b.jpeg";
// import i5 from "../Image Components/Lab Pictures/lab5.jpeg";
export const labData = [
    {
        id: "1",
        name: "VLSI Design Laboratory",
        des: "The focus of this lab is widely spread towards different pros and cons of the entire upgrading VLSI domain. Development works at different levels like vlsi circuits &amp; system design has extensively being carried out. The VLSI lab is well-equipped with some of the most modern facilities of recent times. Hardware equipment include FPGA development kits from Xilinx and Altera Inc. along with high-end software tools and packages for VLSI design and synthesis namely Cadence Bundle, Xilinx ISE Foundation Softwares etc.The laboratory course explores the design aspects of an introduction to the characteristics of digital logic, design, construction, testing and debugging of simple digital circuits using Verilog HDL. and also provide an introduction to the development of application using microcontrollers.",
        used_Software : [
            "Synopsys",
            "Mentor Graphics"
        ],
        img :[
            i1,i1,i1
        ]
    },
    {
        id: "2",
        name: "Fabrication Laboratory",
        des: "The primary objective of the Fabrication Laboratory is to know the basic Unit Processes for Fabrication Microelectronic Devices and the process flow to fabricate several micro and nano- electronic device samples of interest to be used for post graduate lab demonstration and also for cutting edge research work. The Unit fabrication processes when placed in a particular sequence leads to fabrication process flow which essentially results in fabrication of amicroelectronic device",
        used_Software:[
            "Metalization Unit",
            "Spin Coating",
            "Aniline Furnace",
            "Chemical Laboratory"
        ],
        img :[
            i2a,i2b,i2c
        ]
    },
    {
        id: "3",
        name: "Characterization Lab",
        des: "The primary objective of the Characterization Laboratory is to test the grown samples for feasible applications. This characterization helps to study the performance and yield of the device under Test (DUT). Microelectronics device characterization could be performed by extracting electrical and electronics parameter and thereby finally obtaining device performance and device yield.",
        used_Software:[
            "Prob Station",
            "Keithley",
            "IV-CV measurement unit",
            "Silvaco"
        ],
        img :[
            i3a,i3b,i3c
        ]
    },
    {
        id: "4",
        name: "System Design Laboratory",
        des: "The primary objective of the System Design Laboratory is Acquisition and Analysis of data collected from the solar panels by micro controller based system using sensors and its conditioning circuitry.",
        used_Software:[
            "FPGA",
            "FPAA",
            "Microcontroller",
            "DSP Processor",
            "Sensors"
        ],
        img :[
            i4,i4,i4
        ]
    }
]