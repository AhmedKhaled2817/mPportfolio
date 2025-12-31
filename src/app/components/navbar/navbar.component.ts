import { Component, HostListener, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ThemeService } from "../../services/theme.service";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.scss",
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  isMenuOpen = false;
  isDarkMode = false;
  currentSection: string = "hero";
  private sectionIds = ["hero", "about", "skills", "projects", "contact"];

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.isDarkMode$.subscribe((isDark) => {
      this.isDarkMode = isDark;
    });
    this.updateActiveSection();
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
    this.updateActiveSection();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      this.closeMenu();
    }
  }

  @HostListener("document:click", ["$event"])
  onDocumentClick(event: Event) {
    if (!this.isMenuOpen) return;
    const target = event.target as HTMLElement;
    const isInside = !!target.closest(".nav-menu, .menu-toggle");
    if (!isInside) {
      this.closeMenu();
    }
  }

  @HostListener("window:resize", [])
  onWindowResize() {
    if (window.innerWidth > 768 && this.isMenuOpen) {
      this.closeMenu();
    }
  }

  private updateActiveSection() {
    const scrollPosition = window.scrollY + 80;
    let active = this.currentSection;
    for (const id of this.sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      if (top <= scrollPosition) {
        active = id;
      }
    }
    this.currentSection = active;
  }
}
