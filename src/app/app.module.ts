import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { StudentsComponent } from "./studentDetails/students.component";
import { HoverColorDirective } from './commonDirective/hover-color.directive';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { LifeCycleHookComponent } from './life-cycle-hook/life-cycle-hook.component';
import { NgtemplateandcontentComponent } from './ngtemplateandcontent/ngtemplateandcontent.component';
import { GamecontrolComponent } from './82practising/gamecontrol/gamecontrol.component';
import { OddcontrolComponent } from './82practising/oddcontrol/oddcontrol.component';
import { EvencontrolComponent } from './82practising/evencontrol/evencontrol.component';
import { DirectiveDeepDiveComponent } from './directive-deep-dive/directive-deep-dive.component';
import { BasicHighlightDiretcive } from './custom-directive/basic-highlight-directive';
import { BetterHighlightDirective } from './custom-directive/better-highlight.directive';
import { CustomStructureDirectiveDirective } from './custom-directive/custom-structure-directive.directive';
import { DropdownDirective } from './shared/dropdown.directive';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    StudentsComponent,
    HoverColorDirective,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailsComponent,
    RecipesItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    HeroBannerComponent,
    CockpitComponent,
    ServerElementComponent,
    LifeCycleHookComponent,
    NgtemplateandcontentComponent,
    GamecontrolComponent,
    OddcontrolComponent,
    EvencontrolComponent,
    DirectiveDeepDiveComponent,
    BasicHighlightDiretcive,
    BetterHighlightDirective,
    CustomStructureDirectiveDirective,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
