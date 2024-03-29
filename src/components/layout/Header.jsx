import { useState } from "react";
import { RiMenuLine } from "react-icons/ri";
import { Link as ScrollLink } from "react-scroll";
import useEventListener from "../../hooks/useEventListener";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "../utils";
import { headerNavAnimation } from "../../lib/motion";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    scrollTop > 200 ? setSticky(true) : setSticky(false);
  };

  useEventListener("scroll", isSticky);

  return (
    <header
      className={`header top-0 left-0 z-50 h-auto w-full ${
        sticky
          ? "fixed animate-slidedown border-b border-white border-opacity-20 bg-grey bg-opacity-80 backdrop-blur backdrop-filter"
          : "absolute"
      }`}
    >
      <div className="container mx-auto">
        <div className="header-inner flex items-center justify-between">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            variants={headerNavAnimation}
          >
            <ScrollLink
              activeClass="!text-primary"
              to="section-home"
              spy={true}
              smooth="true"
              offset={-74}
              duration={1000}
              className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary"
            >
              <Logo/>
            </ScrollLink>
          </motion.div>
          <div className="header-mobilenav block lg:hidden">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              variants={headerNavAnimation}
            >
              <button
                className="btn btn-small btn-transparent px-3 text-3xl"
                onClick={() => setMobileMenu(true)}
              >
                <RiMenuLine />
              </button>
              
            </motion.div>
            <AnimatePresence>
              {mobileMenu && (
                <motion.div
                  initial={{ translateY: "100vh" }}
                  animate={{ translateY: "0px" }}
                  exit={{ translateY: "-100vh" }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-grey p-4 text-center"
                >
                  <MobileNavigation changeState={setMobileMenu} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="header-nav hidden lg:block">
            <Navigation />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
