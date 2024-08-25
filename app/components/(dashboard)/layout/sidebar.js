import MetisMenu from "@metismenu/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const Sidebar = ({ menu }) => {
  const pathname = usePathname();

  const [update, setUpdate] = useState();

  const isActive = (item) => {
    if (item?.href === pathname || item?.childHrefs?.includes(pathname)) {
      return true;
    }
    let find = item?.child?.find(
      (child) =>
        child.href === pathname || child?.childHrefs?.includes(pathname)
    );
    return !!find;
  };

  useEffect(() => {
    setUpdate(!update);
    document.querySelectorAll(".metismenu .sub-menu")?.forEach((menu) => {
      menu?.childNodes?.forEach((child) => {
        let item = child.childNodes[0];
        if (item.href === window.location.href) {
          if (!menu.classList.contains("mm-show")) {
            menu.classList.add("mm-show");
          }
        }
      });
    });
  }, [pathname]);

  const removeMenu = () => {
    try {
      if (window.innerWidth < 1024) {
        document.querySelector(".dashboard")?.classList.remove("mini");
        document.querySelector(".dashboard")?.classList.remove("mobile");
      }
    } catch (e) {}
  };

  return (
    <>
      <div className="sidebar-bg" onClick={removeMenu} />
      <nav className="sidebar">
        <div>
          <div className="h-16 flex justify-center items-center">
            <span className={`site-title `}>QuantaServe</span>
          </div>
          <MetisMenu>
            {menu?.map((item, index) => {
              // let Icon = item.icon || Fragment
              return (
                <li
                  className={`${isActive(item) ? "mm-active active" : ""}`}
                  key={index}
                >
                  {item?.child ? (
                    <>
                      <a
                        className={`nav-item has-arrow ${
                          isActive(item)
                            ? item?.child?.length > 0
                              ? "p-active"
                              : "active"
                            : ""
                        }`}
                      >
                        <div>{item?.icon && item?.icon}</div>
                        <span>{item.label}</span>
                      </a>
                      <ul className="sub-menu">
                        <li className="label">{item.label}</li>
                        {item?.child?.map((child, index) => {
                          // let Icon = child.icon || Fragment
                          return (
                            <li key={index}>
                              <Link href={child.href || "#!"}>
                                <span
                                  onClick={removeMenu}
                                  className={`nav-item ${
                                    isActive(child) ? "active" : ""
                                  }`}
                                >
                                  {child.icon && (
                                    <span className="icon">{child.icon}</span>
                                  )}
                                  <span> {child.label}</span>
                                </span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </>
                  ) : (
                    <Link href={item.href || "#!"}>
                      <span
                        className={`nav-item ${isActive(item) ? "active" : ""}`}
                        onClick={() => {
                          document
                            .querySelectorAll(".metismenu .sub-menu")
                            ?.forEach((menu) => {
                              menu.classList.remove("mm-show");
                            });
                          removeMenu();
                        }}
                      >
                        <div>{item?.icon && item?.icon}</div>
                        <span className="c-tooltip">{item.label}</span>
                      </span>
                    </Link>
                  )}
                </li>
              );
            })}
          </MetisMenu>
        </div>
      </nav>
    </>
  );
};
export default Sidebar;
