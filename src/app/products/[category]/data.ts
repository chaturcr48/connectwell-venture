interface Product {
  title: string;
  description: string;
  image: string;
  features: string[];
  keyFeatures: Record<string, string>;
  availableSizes?: string;
}

interface Category {
  title: string;
  description: string;
  products: Product[];
}

export const categories: Record<string, Category> = {
  electrical: {
    title: "Electrical Products",
    description:
      "Explore our range of high-quality electrical products designed for various industrial applications.",
    products: [
      {
        title: "Continuous Duty Loud Ringing A.C. Gong Bells",
        description:
          "Suitable for continuous duty offering years of trouble-free service.",
        image: "/products/electrical_products/ac_gong_bells.webp",
        keyFeatures: {
          "keyFeatures-1":
            "Continuous Duty: Suitable for continuous duty offering years of trouble-free service.",
          "keyFeatures-2":
            "Electro-Magnetic System: Specially designed with permanent magnets to ensure steady supply of current to the coils, preventing overheating.",
          "keyFeatures-3":
            "Wide Applications: Recommended for use in EOT Cranes, mobile equipment, conveyor galleries, substations, unguarded railway crossings, marine ships, theaters, schools, etc.",
        },
        features: [
          "Continuous Duty: Suitable for continuous duty offering years of trouble-free service.",
          "Electro-Magnetic System: Specially designed with permanent magnets to ensure steady supply of current to the coils, preventing overheating.",
          "Wide Applications: Recommended for use in EOT Cranes, mobile equipment, conveyor galleries, substations, unguarded railway crossings, marine ships, theaters, schools, etc.",
          "Low Maintenance: Practically no maintenance required due to robust and versatile proven design.",
          "Splash Proof Design: Can be installed in open areas exposed to heavy rains, coke, and dust-laden atmospheres.",
          "Enclosure Category: IP-65 of IS-2147-1962.",
          "Coil Voltage: 12, 24, 48, 110, 230V AC.",
          "Specifications: Kakku TYPE | Gong Dia(MM) | No. of Gongs | Audiobility (Db) | KBL-74(87) | 87 | Single Gong | 86 | KBL-74(150) | 150 | Single Gong | 97 | KDGB-79 | 150 | Double Gong | 102",
        ],
        availableSizes: "Various sizes available based on specifications.",
      },
      {
        title: "Arm Chair Control Unit",
        description:
          "Compact and reliable control unit with advanced features.",
        image: "/products/electrical_products/arm chair control unit.webp",
        keyFeatures: {
          "keyFeatures-1": "Compact Design: Advanced master controllers.",
          "keyFeatures-2":
            "High-Quality Components: Selector switches, lamps, push buttons.",
          "keyFeatures-3": "Neat Wiring: Organized wiring for a clean setup.",
        },
        features: [
          "Reliable & Compact Design: Panels on both sides of the chair with advanced master controllers for smooth and precise operation.",
          "High-Quality Components: Includes selector switches, indicating lamps, illuminated push buttons, and foot switches.",
          "Neat Wiring: Organized wiring guided from the bottom of the chair for a clean setup.",
          "Adjustable Chair Height: Can be modified according to the operator's height with automatic latching at the desired position.",
          "Adjustable Armrests: Can be moved vertically up and down with a latching facility.",
          "PC Monitor Mounting: Comes with a provision to mount a PC monitor.",
          "360° Rotation: The chair and control unit can revolve on either side at a desired angle.",
          "Sliding Seat Adjustment: Seat can slide forward and backward with a latching mechanism.",
          "Adjustable Backrest: Can be locked at the desired angle for ergonomic support.",
          "Customization Available: Options to modify the unit and accessories as per specific requirements.",
        ],
        availableSizes: "Standard Size: 1200 mm x 1200 mm x 1200 mm",
      },
      {
        title: "AC Electromagnet Brakes",
        description:
          "Efficient brakes with thrustor-operated design and fail-safe mechanism.",
        image: "/products/electrical_products/ac electromagnet brakes.webp",
        keyFeatures: {
          "keyFeatures-1": "Thrustor-Operated: Efficient brake application.",
          "keyFeatures-2": "Fail-Safe Mechanism: Reliable during emergencies.",
          "keyFeatures-3": "Epoxy-Encapsulated Coils: Long-lasting operation.",
        },
        features: [
          "Thrustor-Operated Design: Uses a robust thrustor mechanism for efficient brake application and release.",
          "Fail-Safe Mechanism: Operates on a fail-safe principle to ensure reliable performance during emergencies or power outages.",
          "Epoxy-Encapsulated Coils: Class 'F' insulation for long-lasting operation under varying conditions.",
          "Clapper-Type Construction: Provides precise and consistent braking.",
          "Manual Release: Facilitates manual release by turning the release nuts.",
          "Torque Setting: Easy torque adjustment by compressing the torque spring to predefined markings.",
          "Limit Switch Attachments: Optional limit switches for monitoring brake release and lining wear.",
          "Durability and Standards: Built to conform to IPSS, RUSSIAN, AISE, and NEMA standards for reliability and quality.",
        ],
        availableSizes: "KBT: 100, 150, 160, 200, 300, 400, 500, 600 mm.",
      },
      {
        title: "Contactors (DC) & (AC) Clapper",
        description:
          "High degree of reliability & quick maintainability to minimize down time.",
        image: "/products/electrical_products/contactors_dc_ac_clapper.webp",
        keyFeatures: {
          "keyFeatures-1":
            "High Reliability: Quick maintainability to minimize down time.",
          "keyFeatures-2":
            "High Vibration Resistance: Withstanding capability.",
          "keyFeatures-3":
            "Efficient Operation: Blow out coils & arc-chutes for long contact life.",
        },
        features: [
          "High Reliability: Quick maintainability to minimize down time.",
          "High Vibration Resistance: Withstanding capability.",
          "Efficient Operation: Blow out coils & arc-chutes for long contact life.",
          "DC Contactors: Ratings from 5A to 900A, Operating coil voltage: 110V/220V DC.",
          "AC Clappers: Ratings from 60A to 100A, Operating coil voltage: 127V/230V/400V AC.",
          "Vital Accessories: Arc-chutes, coils, contacts, mechanical interlock & auxiliary contact block assemblies.",
        ],
        availableSizes: "Various sizes available based on ratings.",
      },
      {
        title: "Control / Programmer Switches",
        description:
          "Suitable for Mobile Equipments and Locos besides other applications such as Motor Control Centers, Control posts & pulpits.",
        image: "/products/electrical_products/control_programmer_switches.webp",
        keyFeatures: {
          "keyFeatures-1":
            "Adaptability: Easier and faster installation on existing mounting of other reputed makes.",
          "keyFeatures-2":
            "Action / Version: Stayput / Spring return design / With lost motion device (memory contacts).",
          "keyFeatures-3": "Rated Continuous Current: 16 Amp to 25 Amp.",
        },
        features: [
          "Suitable for Mobile Equipments and Locos besides other applications such as Motor Control Centers, Control posts & pulpits.",
          "Adaptability: Easier and faster installation on existing mounting of other reputed makes.",
          "Action / Version: Stayput / Spring return design / With lost motion device (memory contacts).",
          "Rated Continuous Current: 16 Amp to 25 Amp.",
          "Rated Operated Voltage: 500V, 50Hz or 220V / 440V DC.",
          "Breaking Current at 220V DC (L/R ≤ 0.1 Sec): Ranges from 1.25Amp to 1.75Amp.",
          "Rated Duty: 600 on load operating cycles per hour.",
          "Type of Handle: Pistol grip / oval shaped.",
          "Available in open execution or with the dust proof enclosures.",
          "High degree of reliability is ensured.",
        ],
        availableSizes: "Various sizes available based on specifications.",
      },
      {
        title: "Ergonomic Crane Cabins Air Conditioned / Open Type",
        description: "Complete pre-wired, ready to use type cabins.",
        image: "/products/electrical_products/crane_cabin.webp",
        keyFeatures: {
          "keyFeatures-1":
            "Toughened Glasses: Durable rubber gaskets & beadings.",
          "keyFeatures-2": "Clear Bottom View: With age & glass (option).",
          "keyFeatures-3":
            "Rubber Mat Insulation: Floor provided with rubber mat insulation.",
        },
        features: [
          "Complete pre-wired, ready to use type cabins.",
          "Toughened glasses with durable rubber gaskets & beadings.",
          "Clear bottom view with age & glass (option).",
          "Floor provided with rubber mat insulation.",
          "Wide view over the working area.",
          "Ergonomically designed arm chair control units / chairs / controllers.",
          "Provided with wall-mounted fan, light fittings.",
          "Engineered structure with most optimized design with self weight.",
          "Provided with mounting lugs as per customer's requirements.",
        ],
        availableSizes: "Various sizes available based on specifications.",
      },
      {
        title: "Electrical Rooms (E-Rooms)",
        description:
          "Heavy Duty Structure suitable for use in EOT cranes & material handling equipments.",
        image: "/products/electrical_products/e_rooms.png",
        keyFeatures: {
          "keyFeatures-1":
            "Heavy Duty Structure: Suitable for use in EOT cranes & material handling equipments.",
          "keyFeatures-2": "Lifting Lugs: Provided on top of e-rooms.",
          "keyFeatures-3":
            "Single Point Doors: Two single point doors provided on either side.",
        },
        features: [
          "Heavy Duty Structure: Suitable for use in EOT cranes & material handling equipments.",
          "Lifting Lugs: Provided on top of e-rooms.",
          "Single Point Doors: Two single point doors provided on either side.",
          "Windows: Toughened glass windows on front & back side.",
          "Floor Insulation: Floor provided with rubber mat insulation.",
          "Radium EXIT Signs: Doors with radium EXIT sign and radium strips on the floor.",
          "Panic Handles: Provided on the doors.",
          "Wall-Mounted Fan: Provided with wall-mounted fan, light fittings.",
          "Double Wall Insulation: Provided on sides & top.",
          "Support Handles: Inside walls provided with handles for support.",
          "Sitting & Tool Table: Provision for sitting & tool table inside.",
          "Exterior Finish: Blue color with customer's logo.",
        ],
        availableSizes: "Various sizes available based on specifications.",
      },
      {
        title: "DC Electromagnetic Brakes (KCH, KBD)",
        description:
          "Efficient brakes with thrustor-operated design and fail-safe mechanism.",
        image: "/products/electrical_products/dc_electromagnetic_brakes.webp",
        keyFeatures: {
          "keyFeatures-1":
            "Wound Coil Options: Available with shunt or series wound coils for versatile applications.",
          "keyFeatures-2":
            "Fail-Safe Operation: Designed to ensure reliable braking, even during power failure.",
          "keyFeatures-3":
            "Epoxy-Encapsulated Coils: Class 'F' insulated coils for enhanced durability and performance.",
        },
        features: [
          "Wound Coil Options: Available with shunt or series wound coils for versatile applications.",
          "Fail-Safe Operation: Designed to ensure reliable braking, even during power failure.",
          "Epoxy-Encapsulated Coils: Class 'F' insulated coils for enhanced durability and performance.",
          "Rigid Shoe Positioner: Ensures brake shoes remain properly aligned, preventing tilting or riding the drum when released.",
          "Manual Release: Easy manual release by turning the release nuts.",
          "Torque Adjustment: Adjust torque settings by compressing the torque spring to the desired marking.",
          "Limit Switch Attachments: Includes options for monitoring brake release and lining wear.",
          "KAKKU Rectifier Panels: Compatible with KAKKU standard brake rectifier panels for converting AC supply to DC for seamless operation.",
          "Standards Compliance: Conforms to IPSS, RUSSIAN, AISE, and NEMA standards.",
        ],
        availableSizes:
          "KBD: 100, 150, 160, 200, 250, 300, 315, 400, 500, 600, 700, 800 mm. KCH: 8, 10, 13, 16, 19, 23 inches.",
      },
      {
        title: "Electro-Magnetic Relays",
        description:
          "Electro-magnetic relays are robust and reliable switching devices designed for industrial applications requiring precision and durability. These relays are ideal for heavy-duty environments such as steel plants, metallurgical industries, and mining equipment.",
        image:
          "/products/electrical_products/electro_magnetic_over_current_relays.webp",
        keyFeatures: {
          "keyFeatures-1":
            "Convenient Accessibility: Components are easily accessible for maintenance, ensuring minimum downtime during servicing.",
          "keyFeatures-2":
            "Versatile Configurations: Available in various types to suit different applications: AC/DC Overcurrent Relays, Time Delay Relays (Flux Decay Type), Auxiliary Relays with up to 8 sets of contacts for advanced functionality.",
          "keyFeatures-3":
            "Industrial Suitability: Built to withstand the arduous demands of steel plants, metallurgical processes, and mining operations.",
        },
        features: [
          "Proven Design and Performance: Time-tested engineering ensures consistent and reliable operation under harsh conditions.",
          "Wide Electrical Ratings: Continuous Current: Rated for currents ranging from 5A to 10A. Breaking Current: Handles up to 0.8A to 1A at 220V DC.",
          "Coil Voltage Options: DC: 12V, 24V, 48V, 110V, 220V. AC: 12V, 24V, 36V, 127V, 220V, 380V at 50Hz to 60Hz. Coils are epoxy cast/coated for enhanced insulation and protection.",
        ],
        availableSizes: "Various sizes available based on specifications.",
      },
      {
        title: "Electro-Pneumatic Valves",
        description:
          "Electro-pneumatic valves are critical components used in industrial automation systems to regulate the flow of air or gas through an electrically operated mechanism. These valves are highly reliable, efficient, and designed to meet the demands of various industrial applications.",
        image: "/products/electrical_products/electro_pneumatic_valves.webp",
        keyFeatures: {
          "keyFeatures-1":
            "Terminal Compatibility: Terminals suitable for conductor sizes up to 2.5mm².",
          "keyFeatures-2":
            "Cable Entry: Equipped with one cable entry of 19mm conduit for easy wiring and installation.",
          "keyFeatures-3":
            "Encapsulation: Completely encapsulated, class 'F' insulated oil for enhanced durability and performance.",
        },
        features: [
          "Terminal Compatibility: Terminals suitable for conductor sizes up to 2.5mm².",
          "Cable Entry: Equipped with one cable entry of 19mm conduit for easy wiring and installation.",
          "Encapsulation: Completely encapsulated, class 'F' insulated oil for enhanced durability and performance.",
          "KAKKU Type Series: TYPE KPV-32, TYPE KP-34, SERIES KPV-40D.",
        ],
        availableSizes: "Various sizes available based on specifications.",
      },
      {
        title: "Ergonomically Designed Control Desk",
        description: "Modular construction ergonomically designed.",
        image:
          "/products/electrical_products/ergonomically_designed_control_desk.webp",
        keyFeatures: {
          "keyFeatures-1": "Degree of Protection: IP42 55.",
          "keyFeatures-2": "Power Coated: Siemens grey / 7035 / 631 shapes.",
          "keyFeatures-3": "Fabrication: Made from 1.6/2 MM MSCR sheets.",
        },
        features: [
          "Modular construction ergonomically designed.",
          "Degree of protection: IP42 55.",
          "Power coated with Siemens grey / 7035 / 631 shapes.",
          "Fabricated from 1.6/2 MM MSCR sheets.",
          "Provided with the lifting lugs, panel lights & power supply socket.",
          "Neat wiring with printed ferrules.",
          "Components used of reputed make only.",
          "Custom built to suit specific requirements.",
        ],
        availableSizes: "Various sizes available based on specifications.",
      },
      {
        title: "Joystick Controllers",
        description:
          "Proven performance in heavy duty applications of steel plant & other industries.",
        image: "/products/electrical_products/joystick_controllers.webp",
        keyFeatures: {
          "keyFeatures-1":
            "Heavy Duty Applications: Proven performance in steel plants & other industries.",
          "keyFeatures-2":
            "Suitable for Automation: Suitable for EOT cranes & other materials handling equipment automation circuits.",
          "keyFeatures-3":
            "Current Rating: Joystick controllers available with continuous current rating of 10-40amp AC/DC.",
        },
        features: [
          "Proven performance in heavy duty applications of steel plant & other industries.",
          "Suitable for EOT cranes & other materials handling equipment automation circuits etc.",
          "Joystick controllers available with continuous current rating of 10-40amp AC/DC.",
          "Stepless version with potentiometers available.",
          "Max 5-0-5 position, up to 16 contacts available.",
          "Available with mechanical / electrical deadman switch.",
          "Available with IP54 enclosure (optional).",
        ],
        availableSizes: "Various sizes available based on specifications.",
      },
      {
        title: "Lifting Magnets",
        description:
          "Our Circular Lifting Magnets ensure efficient lifting of steel, scrap, and construction materials. Built with high-grade steel and modern insulation, they offer durability and energy efficiency. These magnets are easy to install, low maintenance, and trusted for precision and safety. Ideal for industrial applications, they enhance material handling with ease. Get in touch today to find the perfect lifting solution for your needs!",
        image: "/products/electrical_products/lifting_magnets.jpg",
        keyFeatures: {
          "keyFeatures-1":
            "Efficient Lifting: Ensures efficient lifting of steel, scrap, and construction materials.",
          "keyFeatures-2":
            "High-Grade Steel: Built with high-grade steel and modern insulation for durability.",
          "keyFeatures-3":
            "Energy Efficient: Offers energy efficiency and low maintenance.",
        },
        features: [
          "Efficient lifting of steel, scrap, and construction materials.",
          "Built with high-grade steel and modern insulation for durability.",
          "Energy efficient and low maintenance.",
          "Easy to install and trusted for precision and safety.",
          "Ideal for industrial applications.",
        ],
        availableSizes: "Various sizes available based on specifications.",
      },
      {
        title: "Limit Switches",
        description:
          "Heavy duty limit switches for EOT Cranes Steel Mills, Metallurgical plants, Mining, Equipments, Mobile Equipments & Machines Tools, etc.",
        image: "/products/electrical_products/limit_switches.webp",
        keyFeatures: {
          "keyFeatures-1":
            "Dust Proof/Oil Tight: Available in dust proof/oil tight enclosures.",
          "keyFeatures-2":
            "Various Designs: Available in various design of operating levers, such as roller lever, counter weight operated for lever, 'V' shaped roller levers, foot paddle, push rod, adjustable roller lever etc. Also with liberal over travel for various applications.",
          "keyFeatures-3":
            "Rotary Geared: Rotary geared limit switches are available in different gear ratios with 2 to 24 contacts with proven performance in heavy duty applications in the metallurgical plants.",
        },
        features: [
          "Heavy duty limit switches for EOT Cranes Steel Mills, Metallurgical plants, Mining, Equipments, Mobile Equipments & Machines Tools, etc.",
          "Available in dust proof/oil tight enclosures.",
          "Available in various design of operating levers, such as roller lever, counter weight operated for lever, 'V' shaped roller levers, foot paddle, push rod, adjustable roller lever etc. Also with liberal over travel for various applications.",
          "Rotary geared limit switches are available in different gear ratios with 2 to 24 contacts with proven performance in heavy duty applications in the metallurgical plants.",
          "Cost effective, proven and tested design, ensuring highest reliability.",
          "Conforming to relevant IPSS.",
        ],
        availableSizes: "Various sizes available based on specifications.",
      },
      {
        title: "Operating Panel for DC Electromagnetic Brakes (DCEM Brake)",
        description:
          "The operating panel for DC Electromagnetic Brakes is an essential component designed to facilitate efficient and reliable operation. It ensures seamless integration of the brake system with DC power requirements and provides enhanced control and monitoring features.",
        image: "/products/electrical_products/dcem_brake_operating_panel.webp",
        keyFeatures: {
          "keyFeatures-1":
            "Rectifier Panel Compatibility: Converts AC mains supply to the required DC voltage for the brake's electromagnet. Designed to work with KAKKU standard rectifier panels for optimal performance.",
          "keyFeatures-2":
            "Robust Power Control: Efficient handling of voltage and current to maintain the brake's operational reliability. Includes overload protection to safeguard the brake components.",
          "keyFeatures-3":
            "Manual and Automatic Operation: Provides options for both manual and automatic control of brake application and release.",
        },
        features: [
          "Rectifier Panel Compatibility: Converts AC mains supply to the required DC voltage for the brake's electromagnet. Designed to work with KAKKU standard rectifier panels for optimal performance.",
          "Robust Power Control: Efficient handling of voltage and current to maintain the brake's operational reliability. Includes overload protection to safeguard the brake components.",
          "Manual and Automatic Operation: Provides options for both manual and automatic control of brake application and release.",
          "Fail-Safe Design: In case of power failure, ensures that the brake engages automatically for safety.",
          "Limit Switch Integration: Supports limit switches for monitoring brake release and lining wear. Sends feedback to the control panel for condition monitoring.",
          "Torque Adjustment Assistance: Simplifies torque settings by incorporating marked indicators for compression of the torque spring.",
          "Durable Construction: Built with industrial-grade components to withstand harsh environments. Epoxy-coated internal circuitry to resist dust, moisture, and vibration.",
          "Indicators and Alarms: LED indicators for status (ON/OFF, fault, or brake release). Optional alarms for issues like coil failure or lining wear.",
          "Standards Compliance: Conforms to IPSS, AISE, RUSSIAN, and NEMA standards for safety and quality assurance.",
        ],
        availableSizes: "Various sizes available based on specifications.",
      },
      {
        title: "Operating Panel Brake",
        description:
          "The operating panel for DC Electromagnetic Brakes is an essential component designed to facilitate efficient and reliable operation. It ensures seamless integration of the brake system with DC power requirements and provides enhanced control and monitoring features.",
        image: "/products/electrical_products/OPERATING PANEL BRAKE.webp",
        keyFeatures: {
          "keyFeatures-1":
            "Rectifier Panel Compatibility: Converts AC mains supply to the required DC voltage for the brake's electromagnet. Designed to work with KAKKU standard rectifier panels for optimal performance.",
          "keyFeatures-2":
            "Robust Power Control: Efficient handling of voltage and current to maintain the brake's operational reliability. Includes overload protection to safeguard the brake components.",
          "keyFeatures-3":
            "Manual and Automatic Operation: Provides options for both manual and automatic control of brake application and release.",
        },
        features: [
          "Rectifier Panel Compatibility: Converts AC mains supply to the required DC voltage for the brake's electromagnet. Designed to work with KAKKU standard rectifier panels for optimal performance.",
          "Robust Power Control: Efficient handling of voltage and current to maintain the brake's operational reliability. Includes overload protection to safeguard the brake components.",
          "Manual and Automatic Operation: Provides options for both manual and automatic control of brake application and release.",
          "Fail-Safe Design: In case of power failure, ensures that the brake engages automatically for safety.",
          "Limit Switch Integration: Supports limit switches for monitoring brake release and lining wear. Sends feedback to the control panel for condition monitoring.",
          "Torque Adjustment Assistance: Simplifies torque settings by incorporating marked indicators for compression of the torque spring.",
          "Durable Construction: Built with industrial-grade components to withstand harsh environments. Epoxy-coated internal circuitry to resist dust, moisture, and vibration.",
          "Indicators and Alarms: LED indicators for status (ON/OFF, fault, or brake release). Optional alarms for issues like coil failure or lining wear.",
          "Standards Compliance: Conforms to IPSS, AISE, RUSSIAN, and NEMA standards for safety and quality assurance.",
        ],
        availableSizes: "Various sizes available based on specifications.",
      },
      {
        title: "Pull Cord switches & Belt Sway Switches",
        description:
          "Suitable to operate on higher ambient temperature & extreme weather conditions, dusty locations & hazardous environment.",
        image:
          "/products/electrical_products/pull_cord_belt_sway_switches.webp",
        keyFeatures: {
          "keyFeatures-1":
            "Action of pull cord Switches: Self-locking at end position. Protection for resetting is single/double. For Belt Sway Switches, action is either stay put or self reset.",
          "keyFeatures-2":
            "Contacts: 1 NO+1NC/2NC/2NO +2NC contact rating (continuous) 10A - 16A, up to 500V AC.",
          "keyFeatures-3": "Number of cable entries: 2.",
        },
        features: [
          "Suitable to operate on higher ambient temperature & extreme weather conditions, dusty locations & hazardous environment.",
          "Action of pull cord Switches: Self-locking at end position. Protection for resetting is single/double. For Belt Sway Switches, action is either stay put or self reset.",
          "Contacts: 1 NO+1NC/2NC/2NO +2NC contact rating (continuous) 10A - 16A, up to 500V AC.",
          "Number of cable entries: 2.",
          "Enclosures: Cast iron/cast aluminium conforming to IP-55 or superior.",
          "Perfectly insulated galvanized pull cord wire rope: Overall diameter 4-5mm, providing total safety to operator's hand.",
          "Single or double compression gland.",
          "Available with separate inbuilt terminal box.",
        ],
        availableSizes: "Various sizes available based on specifications.",
      },
      {
        title: "Resistance Box",
        description:
          "Resistance boxes are precision devices used for applications requiring controlled resistance for testing, calibration, or load regulation. Designed with advanced materials and construction techniques, these resistance boxes offer superior performance, durability, and reliability.",
        image: "/products/electrical_products/resistance_box.png",
        keyFeatures: {
          "keyFeatures-1":
            "Wide Range of Grid Resistors: Fechral Edge Wound: Designed for efficient heat dissipation and durability. Fechral Wire Wound: Ensures consistent resistance and long service life. Constantan Wire or Tape Wound: Provides low temperature coefficients for precision applications.",
          "keyFeatures-2":
            "Low Temperature Coefficient: Minimizes variations in resistance due to temperature changes, ensuring precise operation under all conditions.",
          "keyFeatures-3":
            "Vibration Proof Design: The grids and boxes are engineered to withstand vibrations, ensuring stable and reliable performance even in challenging environments.",
        },
        features: [
          "Wide range of grid resistors: Fechral Edge Wound, Fechral Wire Wound, Constantan Wire or Tape Wound.",
          "Low temperature coefficient to minimize variations in resistance due to temperature changes.",
          "Vibration proof design for stable and reliable performance.",
          "Wound grid design to eliminate higher current concentrations at notches.",
          "Restricted temperature rise for longer life and consistent performance.",
          "Draw-out type grids for quick and easy replacement.",
          "Pressure joint-free construction for enhanced reliability.",
          "Customizable options with punched steel grids, cast iron, or formed stainless steel grids.",
        ],
        availableSizes: "Various sizes available based on specifications.",
      },
      {
        title: "Spindle Type Rotary Gear Limit Switch",
        description:
          "Spindle Type Rotary Gear Limit Switches are designed for precise control and reliable performance in industrial applications. They are ideal for use in EOT cranes, steel mills, and other heavy-duty environments.",
        image:
          "/products/electrical_products/spindle_type_rotary_gear_limit_switch.jpg",
        keyFeatures: {
          "keyFeatures-1":
            "Precision Control: Provides accurate control for industrial applications.",
          "keyFeatures-2":
            "Heavy-Duty Design: Built to withstand harsh environments in steel mills and EOT cranes.",
          "keyFeatures-3":
            "Versatile Applications: Suitable for a wide range of industrial uses.",
          "keyFeatures-4":
            "Durable Construction: Made with high-quality materials for long-lasting performance.",
          "keyFeatures-5":
            "Easy Installation: Designed for quick and easy installation.",
          "keyFeatures-6":
            "Maintenance-Free: Requires minimal maintenance for continuous operation.",
        },
        features: [
          "Precision control for industrial applications.",
          "Heavy-duty design for harsh environments.",
          "Versatile applications for a wide range of uses.",
          "Durable construction with high-quality materials.",
          "Easy installation for quick setup.",
          "Maintenance-free for continuous operation.",
        ],
        availableSizes: "Various sizes available based on specifications.",
      },
      {
        title: "Suspended Magnetic Separator",
        description:
          "Deep penetrating electromagnets incorporating all of the latest innovations in coil design, allow KAKKU's electromagnetic suspended separators to remove both large and small tramp metal from the deep burdens on fast moving conveyors. The separators are designed for continuous operation at peak performance. Electromagnetic suspended separator are available in manual and self cleaning designs. 115 or 230V DC, copper / aluminium, coils. 100% duty cycle, natural air / oil cooled. Heavy wear-resistant non-magnetic steel bottom. Available in Overband design also.",
        image: "/products/electrical_products/suspended_magnetic_separator.png",
        keyFeatures: {
          "keyFeatures-1":
            "Deep Penetrating Electromagnets: Incorporating all of the latest innovations in coil design.",
          "keyFeatures-2":
            "Continuous Operation: Designed for continuous operation at peak performance.",
          "keyFeatures-3":
            "Manual and Self Cleaning Designs: Available in both manual and self cleaning designs.",
        },
        features: [
          "Deep penetrating electromagnets incorporating all of the latest innovations in coil design.",
          "Designed for continuous operation at peak performance.",
          "Electromagnetic suspended separator are available in manual and self cleaning designs.",
          "115 or 230V DC, copper / aluminium, coils.",
          "100% duty cycle, natural air / oil cooled.",
          "Heavy wear-resistant non-magnetic steel bottom.",
          "Available in Overband design also.",
        ],
        availableSizes: "Various sizes available based on specifications.",
      },
      {
        title: "Transformers",
        description:
          "Transformers are essential electrical devices used to transfer electrical energy between circuits through electromagnetic induction. They play a critical role in power transmission, distribution, and various industrial and commercial applications.",
        image: "/products/electrical_products/transformers.webp",
        keyFeatures: {
          "keyFeatures-1":
            "Power Transformers: Used in power generation and transmission systems for stepping up or stepping down voltage levels. High voltage (33 kV and above). Found in substations, power plants, and transmission networks.",
          "keyFeatures-2":
            "Distribution Transformers: Used for reducing voltage levels to supply power to residential, commercial, and industrial users. Medium voltage (up to 33 kV). Found near end-users for local power distribution.",
          "keyFeatures-3":
            "Isolation Transformers: Used to isolate circuits and protect sensitive equipment from electrical noise and surges. Applications include industrial machinery, medical equipment, and IT systems.",
          "keyFeatures-4":
            "Instrument Transformers: Current Transformers (CT) and Potential Transformers (PT). Used for measuring and protection purposes by stepping down current or voltage to manageable levels for meters and relays.",
          "keyFeatures-5":
            "Auto-Transformers: Used for voltage regulation and as starters for AC motors. Shares a single winding for primary and secondary circuits. Applications include laboratories, industrial testing, and railway traction.",
          "keyFeatures-6":
            "Special Transformers: Furnace Transformers (used in steel plants), Rectifier Transformers (used with rectifiers), and Traction Transformers (used in railways).",
        },
        features: [
          "Power Transformers: Used in power generation and transmission systems for stepping up or stepping down voltage levels. High voltage (33 kV and above). Found in substations, power plants, and transmission networks.",
          "Distribution Transformers: Used for reducing voltage levels to supply power to residential, commercial, and industrial users. Medium voltage (up to 33 kV). Found near end-users for local power distribution.",
          "Isolation Transformers: Used to isolate circuits and protect sensitive equipment from electrical noise and surges. Applications include industrial machinery, medical equipment, and IT systems.",
          "Instrument Transformers: Current Transformers (CT) and Potential Transformers (PT). Used for measuring and protection purposes by stepping down current or voltage to manageable levels for meters and relays.",
          "Auto-Transformers: Used for voltage regulation and as starters for AC motors. Shares a single winding for primary and secondary circuits. Applications include laboratories, industrial testing, and railway traction.",
          "Special Transformers: Furnace Transformers (used in steel plants), Rectifier Transformers (used with rectifiers), and Traction Transformers (used in railways).",
        ],
        availableSizes: "Various sizes available based on specifications.",
      },
    ],
  },
  automation: {
    title: "Automation Products",
    description:
      "Discover our range of automation products designed to enhance efficiency and productivity in industrial applications.",
    products: [
      {
        title: "Automatic Voltage Regulator",
        description:
          "Stabilize the output voltage of generators and protect electrical equipment from damage.",
        image: "/products/automation_products/automatic_voltage_regulator.webp",
        keyFeatures: {
          "keyFeatures-1":
            "Stabilize Output Voltage: Ensures a stable voltage supply to connected equipment.",
          "keyFeatures-2":
            "Protect Electrical Equipment: Prevents damage from voltage fluctuations.",
          "keyFeatures-3":
            "Automatic Operation: Self-regulating system for continuous voltage monitoring and adjustment.",
        },
        features: [
          "Stabilize the output voltage of generators and protect electrical equipment from damage.",
          "Ensures a stable voltage supply to connected equipment.",
          "Prevents damage from voltage fluctuations.",
          "Automatic operation with self-regulating system.",
          "Continuous voltage monitoring and adjustment.",
          "Suitable for industrial applications, data centers, and critical equipment.",
          "Compact design for easy installation and operation.",
          "Reliable performance under varying load conditions.",
          "Customizable options for specific requirements.",
        ],
        availableSizes: "Various sizes available based on specifications.",
      },
      {
        title: "Automatic Water Level Controller",
        description:
          "Automatically control water levels in tanks, reservoirs, and other water storage systems.",
        image:
          "/products/automation_products/automatic_water_level_controller.webp",
        keyFeatures: {
          "keyFeatures-1":
            "Automated Operation: Controls water levels without manual intervention.",
          "keyFeatures-2":
            "Prevent Overflow: Ensures tanks do not overflow and waste water.",
          "keyFeatures-3":
            "Save Energy: Reduces energy consumption by optimizing water usage.",
        },
        features: [
          "Automatically control water levels in tanks, reservoirs, and other water storage systems.",
          "Controls water levels without manual intervention.",
          "Prevents tanks from overflowing and wasting water.",
          "Optimizes water usage to save energy and reduce costs.",
          "Suitable for residential, commercial, and industrial applications.",
          "Easy installation and setup for quick deployment.",
          "Customizable settings for specific requirements.",
          "Reliable performance under varying water conditions.",
          "Low maintenance and long service life.",
        ],
        availableSizes: "Various sizes available based on specifications.",
      },
      {
        title: "Automatic Boom Barrier Gate",
        description:
          "Automatic boom barriers have become an essential part of modern security systems. They provide an efficient and reliable way to control vehicle access in various environments, such as parking lots, residential areas, and commercial spaces. In this guide, we will explore the different aspects of boom barriers, including types, pricing, and their significance in enhancing security.",
        image: "/products/automation_products/automatic_boom_barrier_gate.webp",
        keyFeatures: {
          "keyFeatures-1":
            "Efficient Vehicle Access Control: Provides reliable control of vehicle access in various environments.",
          "keyFeatures-2":
            "Modern Security Systems: Essential part of modern security systems.",
          "keyFeatures-3":
            "Versatile Applications: Suitable for parking lots, residential areas, and commercial spaces.",
          "keyFeatures-4":
            "Types and Pricing: Various types available with different pricing options.",
          "keyFeatures-5":
            "Enhanced Security: Significantly enhances security by controlling vehicle access.",
        },
        features: [
          "Efficient and reliable way to control vehicle access.",
          "Essential part of modern security systems.",
          "Suitable for parking lots, residential areas, and commercial spaces.",
          "Various types available with different pricing options.",
          "Significantly enhances security by controlling vehicle access.",
        ],
        availableSizes: "Various sizes available based on specifications.",
      },
    ],
  },
  mechanical: {
    title: "Mechanical Products",
    description:
      "Explore our range of mechanical products designed for durability and performance in industrial applications.",
    products: [
      {
        title: "Brake Drum Couplings",
        description:
          "Brake drum couplings are mechanical devices used to connect two shafts for transmitting power. They are designed to provide a flexible connection between the shafts while accommodating misalignment and reducing shock loads. Brake drum couplings are commonly used in industrial applications where precise power transmission is required.",
        image: "/products/mechanical_products/brake_drum_couplings.webp",
        keyFeatures: {
          "keyFeatures-1":
            "Flexible Connection: Provides a flexible connection between two shafts for power transmission.",
          "keyFeatures-2":
            "Misalignment Compensation: Accommodates misalignment between shafts for smooth operation.",
          "keyFeatures-3":
            "Shock Load Reduction: Reduces shock loads to protect connected equipment.",
        },
        features: [
          "Flexible connection between two shafts for power transmission.",
          "Accommodates misalignment between shafts for smooth operation.",
          "Reduces shock loads to protect connected equipment.",
          "Ideal for industrial applications requiring precise power transmission.",
          "Durable construction for long service life.",
          "Easy installation and maintenance.",
          "Customizable options for specific requirements.",
        ],
        availableSizes: "Various sizes available based on specifications.",
      },
      {
        title: "De Neers Tools",
        description:
          "De Neers Tools are known for their durability and precision. They are essential for various industrial and commercial applications, providing reliable performance and ease of use.",
        image: "/products/tools/de_neers_tools.webp",
        keyFeatures: {
          "keyFeatures-1":
            "Durability: Made from high-quality materials for long-lasting use.",
          "keyFeatures-2":
            "Precision: Designed for accurate and efficient performance.",
          "keyFeatures-3":
            "Versatility: Suitable for a wide range of industrial and commercial applications.",
        },
        features: [
          "Made from high-quality materials for long-lasting use.",
          "Designed for accurate and efficient performance.",
          "Suitable for a wide range of industrial and commercial applications.",
          "Comfortable to use, reducing user fatigue.",
          "Available in different sizes and types to meet specific needs.",
        ],
        availableSizes: "Various sizes available based on specifications.",
      },
    ],
  },
  spillPallet: {
    title: "Spill Pallets",
    description:
      "Explore our range of spill pallets designed to contain leaks and spills from drums, IBCs, and other containers. These spill containment solutions help prevent environmental contamination and ensure compliance with safety regulations.",
    products: [
      {
        title: "Spill Pallets",
        description:
          "Spill pallets are essential for containing leaks and spills from drums, IBCs, and other containers. They help prevent environmental contamination and ensure compliance with safety regulations. Our spill pallets are designed to be durable, reliable, and easy to use, making them ideal for a wide range of industrial applications.",
        image: "/products/spill_pallets/spill_pallets.webp",
        keyFeatures: {
          "keyFeatures-1":
            "Contain Leaks and Spills: Prevent environmental contamination and safety hazards.",
          "keyFeatures-2":
            "Durable Construction: Made from high-quality materials for long-lasting use.",
          "keyFeatures-3":
            "Easy to Use: Designed for quick and efficient spill containment.",
        },
        features: [
          "Prevent environmental contamination and safety hazards.",
          "Made from high-quality materials for long-lasting use.",
          "Designed for quick and efficient spill containment.",
          "Suitable for a wide range of industrial applications.",
          "Compliant with safety regulations and standards.",
          "Available in different sizes and configurations to meet specific needs.",
        ],
        availableSizes: "Various sizes available based on specifications.",
      },
      {
        title: "Allwin Roto Plast",
        description:
          "Allwin Roto Plast products are known for their durability and versatility. They are essential for various industrial and commercial applications, providing reliable performance and ease of use.",
        image: "/products/plastic_products/allwin_roto_plast.webp",
        keyFeatures: {
          "keyFeatures-1":
            "Durability: Made from high-quality materials for long-lasting use.",
          "keyFeatures-2":
            "Versatility: Suitable for a wide range of industrial and commercial applications.",
          "keyFeatures-3": "Lightweight: Easy to handle and transport.",
          "keyFeatures-4":
            "Weather Resistant: Designed to withstand various weather conditions.",
          "keyFeatures-5":
            "Customizable: Available in different sizes and colors to meet specific needs.",
        },
        features: [
          "Made from high-quality materials for long-lasting use.",
          "Suitable for a wide range of industrial and commercial applications.",
          "Lightweight and easy to handle.",
          "Weather resistant and durable.",
          "Available in different sizes and colors to meet specific needs.",
        ],
        availableSizes: "Various sizes available based on specifications.",
      },
      {
        title: "Roll Pallet",
        description:
          "Roll pallets are mobile cages designed to facilitate the efficient and safe movement of goods and products within warehouse environments or between different locations. They offer a convenient and practical solution for transporting a wide range of items.",
        image: "/products/spill_pallets/roll_pallet.webp",
        keyFeatures: {
          "keyFeatures-1": "Efficient Movement: Facilitates the efficient and safe movement of goods.",
          "keyFeatures-2": "Mobile Design: Equipped with wheels for easy transportation.",
          "keyFeatures-3": "Durable Construction: Made from high-quality materials for long-lasting use.",
          "keyFeatures-4": "Versatile Applications: Suitable for various warehouse and transportation needs.",
          "keyFeatures-5": "Secure Containment: Ensures goods are securely contained during movement.",
        },
        features: [
          "Facilitates the efficient and safe movement of goods.",
          "Equipped with wheels for easy transportation.",
          "Made from high-quality materials for long-lasting use.",
          "Suitable for various warehouse and transportation needs.",
          "Ensures goods are securely contained during movement.",
        ],
        availableSizes: "Various sizes available based on specifications.",
      },
    ],
  },
};
