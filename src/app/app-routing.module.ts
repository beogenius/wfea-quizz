import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserComponent} from './components/layout/user/user.component';
import {LoginComponent} from './components/login/login.component';
import {LayoutComponent} from './components/layout/layout.component';
import {GroupComponent} from './components/layout/group/group.component';
import {QuestionComponent} from './components/layout/question/question.component';
import {ExamComponent} from './components/layout/exam/exam.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent,
        data: {
            title: 'Login List',
        },
    },
    {
        path: 'admin',
        component: LayoutComponent,
        data: {
            title: 'Admin Layout'
        },
        children: [
            {
                path: 'exam',
                component: ExamComponent,
            },
            {
                path: 'group',
                component: GroupComponent,
            },
            {
                path: 'question',
                component: QuestionComponent,
            }, {
                path: 'user',
                component: UserComponent,
            },

        ]
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
