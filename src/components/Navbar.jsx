import StaggeredMenu from "@/components/StaggeredMenu";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "About Us", ariaLabel: "Learn about us", link: "/about" },
  { label: "Events", ariaLabel: "View our events", link: "/events" },
  { label: "Location", ariaLabel: "Find our location", link: "/location" },
  { label: "Contact Us", ariaLabel: "Contact us", link: "/contact" }
];

export default function Navbar() {
  return (
    <div className="navbar-fixed">
      <StaggeredMenu
        position="right"
        items={menuItems}
        displaySocials={false}
        displayItemNumbering={true}
        menuButtonColor="#ffffff"
        openMenuButtonColor="#ffffff"
        changeMenuColorOnOpen={true}
        colors={["#ef9e9e", "#ff2727"]}
        accentColor="#ff2727"
        isFixed={true}
      />
    </div>
  );
}