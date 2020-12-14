import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
    {
        path: "table",
        component: TableComponent,
    },
    {
        path: "documentation",
        component: DocumentationComponent,
    },
    {
        path: "",
        pathMatch: "full",
        redirectTo: "table"
    },
    { path: "**", redirectTo: "table" }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FrameworksTableRoutingModule { }
