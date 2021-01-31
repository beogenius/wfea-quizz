import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserComponent} from './components/layout/user/user.component';
import {LoginComponent} from './components/login/login.component';
import {LayoutComponent} from './components/layout/layout.component';
import {GroupComponent} from './components/layout/group/group.component';
import {QuestionComponent} from './components/layout/question/question.component';
import {ExamComponent} from './components/layout/exam/exam.component';
import {createContentChildren} from '@angular/compiler/src/core';
import {CreateUserComponent} from './components/layout/user/create-user/create-user.component';
import {UserDetailComponent} from './components/layout/user/user-detail/user-detail.component';
import {UpdateUserComponent} from './components/layout/user/update-user/update-user.component';


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
                component: UserComponent
            },
            {
                path: 'user/create',
                component: CreateUserComponent
            },
            {
                path: 'user/detail/:id',
                component: UserDetailComponent
            },
            {
                path: 'user/update/:id',
                component: UpdateUserComponent
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
