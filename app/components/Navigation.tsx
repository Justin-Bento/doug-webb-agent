import { Button } from "@/components/ui/button";

export default function Navigation() {
  return (
    <header className="overflow-hidden shadow">
      <div className="container mx-auto px-4 py-5 sm:p-6">
        <nav className="">
          <ul className="flex items-center justify-end list-none">
            <li>
              <a href="#"><Button variant="ghost" size="sm">Link #1</Button></a>
            </li>
            <li>
              <a href="#"><Button variant="ghost" size="sm">Link #2</Button></a>
            </li>
            <li>
              <a href="#"><Button variant="ghost" size="sm">Link #3</Button></a>
            </li>
            <li>
               <a href="#"><Button variant="ghost" size="sm">Link #3</Button></a>
            </li>
            <li>
               <a href="#"><Button variant="ghost" size="sm">Link #3</Button></a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
