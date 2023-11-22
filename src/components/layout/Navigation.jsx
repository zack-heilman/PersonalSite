import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { headerNavAnimation } from "../../lib/motion";


const sections = [
  {
    location: 'section-home',
    name:'Home'
  },
  {
    location: 'section-resume',
    name:'Experience'
  }, 
  {
    location: 'section-contact',
    name:'Contact'
  }
]

const Navigation = () => {

  return (
    <nav className="flex-grow px-5 text-center">
      <ul className="mb-0 inline-flex list-none gap-7 pl-0">
        {sections.map((section, index) => (
            <li className="inline-block align-middle" key={index}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 * index}}
                variants={headerNavAnimation}
              >
                <ScrollLink
                  activeClass="!text-primary"
                  to={section.location}
                  spy={true}
                  smooth="easeInOutQuart"
                  offset={-74}
                  duration={1500}
                  className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary"
                >
                  {section.name}
                  <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
                </ScrollLink>
              </motion.div>
            </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
