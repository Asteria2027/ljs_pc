

// import Main from '@/page/Main'
import Main from '../page/Main.vue'

// 不作为Main组件的子页面展示的页面单独写，如下
// export const otherRouter = {
//   path: '/other',
//   name: 'otherRouter',
//   component: Other
// }

export const page404 = {
  path: '/*',
  name: 'error-404',
  meta: {
    title: '404-页面不存在'
  },
  component: () =>
    import ('@/page/error-page/404.vue')
}

// 作为Main组件的子页面展示
export const appRouter = {
  path: '/',
  name: 'appRouter',
  redirect: '/home',
  component: Main,
  children: [{
      path: 'home',
      name: 'home_index',
      component: () =>
        import ('@/page/home/home.vue')
    },
    {
      path:'tender',
      name:'tender_area',
      redirect:'/tender/person',
      component: ()=>
        import ('@/page/tender/tender.vue'),
      children: [{
          path:'/tender/person',
          name:'tender_person',
          component: ()=>
          import ('@/page/tender/tender_person/tender_person.vue')
        },
        {
          path:'/tender/scattered',
          name:'tender_scattered',
          component: ()=>
          import ('@/page/tender/tender_scattered/tender_scattered.vue')
        },
        {
          path:'/tender/enterprise',
          name:'tender_enterprise',
          component: ()=>
          import ('@/page/tender/tender_enterprise/tender_enterprise.vue')
        },
        {
          path:'/tender/transfer',
          name:'tender_transfer',
          component: ()=>
          import ('@/page/tender/tender_transfer/tender_transfer.vue')
        },
        {
          path:'/tender/newbie',
          name:'tender_newbie',
          component: ()=>
          import ('@/page/tender/tender_newbie/tender_newbie.vue')
        },
      ]
    },
    {
      path:'guide',
      name:'guide_new',
      component: ()=>
        import ('@/page/guide/guide.vue')
    },
    {
      path:'infoDisplay',
      name:'info_display',
      redirect:'/infoDisplay/organization',
      component: ()=>
        import ('@/page/infoDisplay/infoDisplay.vue'),
      children:[{
          path:'/infoDisplay/organization',
          name:'info_organization',
          component: ()=>
          import ('@/page/infoDisplay/info_organization/info_organization.vue')
        },
        {
          path:'/infoDisplay/record',
          name:'info_record',
          component: ()=>
          import ('@/page/infoDisplay/info_record/info_record.vue')
        },
        {
          path:'/infoDisplay/review',
          name:'info_review',
          component: ()=>
          import ('@/page/infoDisplay/info_review/info_review.vue')
        },
        {
          path:'/infoDisplay/operation',
          name:'info_operation',
          component: ()=>
          import ('@/page/infoDisplay/info_operation/info_operation.vue')
        },
        {
          path:'/infoDisplay/riskManagement',
          name:'info_riskManagement',
          component: ()=>
          import ('@/page/infoDisplay/info_riskManagement/info_riskManagement.vue')
        },
        {
          path:'/infoDisplay/newsAnnouncement',
          name:'info_newsAnnouncement',
          component: ()=>
          import ('@/page/infoDisplay/info_newsAnnouncement/info_newsAnnouncement.vue')
        },
        {
          path:'/infoDisplay/letterOfApproval',
          name:'info_letterOfApproval',
          component: ()=>
          import ('@/page/infoDisplay/info_letterOfApproval/info_letterOfApproval.vue')
        },
        {
          path:'/infoDisplay/riskWarn',
          name:'info_riskWarn',
          component: ()=>
          import ('@/page/infoDisplay/info_riskWarn/info_riskWarn.vue')
        },
        {
          path:'/infoDisplay/collaborator',
          name:'info_collaborator',
          component: ()=>
          import ('@/page/infoDisplay/info_collaborator/info_collaborator.vue')
        },
      ]
    },
    {
      path:'memberCentre',
      name:'member_centre',
      redirect:'/memberCentre/account',
      component: ()=>
        import ('@/page/memberCentre/memberCentre.vue'),
      children:[{
          path:'/memberCentre/account',
          name:'centre_account',
          component: ()=>
          import ('@/page/memberCentre/centre_account/centre_account.vue')
        },
        {
          path:'/memberCentre/tender',
          name:'centre_tender',
          component: ()=>
          import ('@/page/memberCentre/centre_tender/centre_tender.vue')
        },
        {
          path:'/memberCentre/transactionDetails',
          name:'centre_transactionDetails',
          component: ()=>
          import ('@/page/memberCentre/centre_transactionDetails/centre_transactionDetails.vue')
        },
        {
          path:'/memberCentre/recharge',
          name:'centre_recharge',
          component: ()=>
          import ('@/page/memberCentre/centre_recharge/centre_recharge.vue')
        },
        {
          path:'/memberCentre/inviteFriends',
          name:'centre_inviteFriends',
          component: ()=>
          import ('@/page/memberCentre/centre_inviteFriends/centre_inviteFriends.vue')
        },
        {
          path:'/memberCentre/myRebates',
          name:'centre_myRebates',
          component: ()=>
          import ('@/page/memberCentre/centre_myRebates/centre_myRebates.vue')
        },
        {
          path:'/memberCentre/myWelfare',
          name:'centre_myWelfare',
          component: ()=>
          import ('@/page/memberCentre/centre_myWelfare/centre_myWelfare.vue')
        },
        {
          path:'/memberCentre/message',
          name:'centre_message',
          component: ()=>
          import ('@/page/memberCentre/centre_message/centre_message.vue')
        },
        {
          path:'/memberCentre/automaticBid',
          name:'centre_automaticBid',
          component: ()=>
          import ('@/page/memberCentre/centre_automaticBid/centre_automaticBid.vue')
        },
        {
          path:'/memberCentre/securityCenter',
          name:'centre_securityCenter',
          component: ()=>
          import ('@/page/memberCentre/centre_securityCenter/centre_securityCenter.vue')
        },
        {
          path:'/memberCentre/myTransfer',
          name:'centre_myTransfer',
          component: ()=>
          import ('@/page/memberCentre/centre_myTransfer/centre_myTransfer.vue')
        },
      ]  
    },
    {
      path: 'login',
      name: 'login',
      meta: {
        title: '快速登录 - 联金所'
      },
      component: () =>
        import ('@/page/user/login.vue')
    },
    {
      path: 'register',
      name: 'register',
      meta: {
        title: '快速登录 - 联金所'
      },
      component: () =>
        import ('@/page/user/register.vue')
    }
  ]
}


// 所有上面定义的路由都要写在下面的routers里
export const routers = [
  // otherRouter,
  appRouter,
  page404
]