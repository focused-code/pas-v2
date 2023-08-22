// Begin GQL Queries

export const GET_STUDENTS = `
  query($coach_id: Int!){
    students(coach_id: $coach_id){
        id
        first_name
        last_name
        email
        profile_pic
    }
  }
`;

export const GET_USER_GROUPS = `
  query($user_id: Int!){
    usergroups(user_id: $user_id){
        id
        user_group_id
        title
        name
        slug
        owner
        description
        group_img
        price
        active
        paused
        template
        payment_frequency
        meeting_time
        time_zone
        meets_on
        total_students
    }
  }
`;

export const GET_DRAFT_USER_GROUPS = `
  query($user_id: Int!){
    draftgroups(user_id: $user_id){
        id
        user_group_id
        title
        name
        slug
        description
        group_img
        price
        active
        paused
        template
        payment_frequency
        meeting_time
        time_zone
        meets_on
        total_students
    }
  }
`;

export const GET_LESSONS = `
  query{
    lessons{
        id
        title
        slug
        short_desc
        full_desc
        lesson_img
        lesson_video
        quiz_url
        published
        free_lesson
        price
        members{
          id
          first_name
          last_name
          email
          profile_pic
        }
        resources{
          id
          description
          resource_type_id
          lesson_id
          url
          type{
            id
            name
            owner
            order
          }
        }
      }
  }
`;


export const GET_COACH_LESSONS = `
  query($user_id: Int!){
    coachlessons(user_id: $user_id){
        id
        title
        slug
        owner
        short_desc
        full_desc
        lesson_img
        lesson_video
        quiz_url
        published
        free_lesson
        price
      }
  }
`;

export const GET_LESSON = `
  query($id: ID){
    lesson(id: $id){
     id
     title
     slug
     short_desc
     full_desc
     lesson_img
     lesson_video
     quiz_url
     published
     free_lesson
     price
     members{
      id
      first_name
      last_name
      email
      profile_pic
     }
     resources{
        id
        description
        resource_type_id
        lesson_id
        url
        type{
          id
          name
          owner
          order
        }
     }
   }
 }
`;

export const GET_GROUPS = `
  query{
    groups{
      id
      title
      name
      slug
      description
      group_img
      intro_video
      price
      active
      template
      payment_frequency
      meets_on
      members{
        id
        first_name
        last_name
        email
        profile_pic
    }
    lessons{
      id
      title
      slug
      short_desc
      full_desc
      lesson_img
      published
      lesson_video
      quiz_url
      free_lesson
      price
      group{
        id
        description
        group_img
        payment_frequency
        price
        slug
        title
        name
        total_lessons
        template
      }
      resources{
        id
        description
        url
        type{
          id
          name
          owner
          order
        }
      }
      }
    }
  }
`;

export const GET_GROUP = `
  query($id:ID, $user_id: Int, $user_group_id: Int){
    group(id: $id, user_id: $user_id, user_group_id: $user_group_id){
      id
      title
      name
      slug
      description
      group_img
      intro_video
      price
      active
      paused
      template
      payment_frequency
      meets_on
      coachgroupmembers{
        id
        first_name
        last_name
        email
        profile_pic
      }
      lessons{
        id
        title
        slug
        short_desc
        full_desc
        lesson_img
        published
        lesson_length
        lesson_video
        quiz_url
        free_lesson
        price
        created_at
        resources{
          id
          description
          url
          type{
            id
            name
            owner
            order
          }
        }
      }
      member_group_lesson{id,user_id,group_id,lesson_id,lesson_length,lesson_order,lesson_length,lesson_access}
    }
  }
`;

export const GET_MEMBERS = `
query{
  members{
    id
    first_name
    last_name
    email
    profile_pic
    role_id
    last_login
    show_tour
    }
  }
`;

export const GET_MEMBER = `
  query($user_id: ID){
    member(user_id: $user_id){
      id
      first_name
      last_name
      email
      profile_pic
      role_id
      last_login
      show_tour
   }
 }
`;

export const GET_LESSON_MEMBERS = `
query($lesson_id:Int, $coach_id: Int){
  lessonUsers(lesson_id: $lesson_id, coach_id: $coach_id){
    id
    first_name
    last_name
    email
    profile_pic
  }
}
`;



export const GET_MEETINGS = `
query{
  lessonMeetings{
    id
    lesson_id
    invited_by
    meeting_url
    meeting_time
    time_zone
    coach_notes
    coach_action_steps
    settings{
      id
      lesson_meeting_id
      three_days_coach_reminder
      three_days_reminder
      one_day_reminder
      one_hour_reminder
      three_days_coach_reminder
      one_day_after_reminder
    }
  }
  }
`;

export const GET_MEETING = `
  query($id: ID){
    lessonMeeting{
      id
      group_id
      lesson_id
      invited_by
      meeting_url
      meeting_time
      time_zone
      coach_notes
      coach_action_steps
      settings{
        id
        lesson_meeting_id
        three_days_coach_reminder
        three_days_reminder
        one_day_reminder
        one_hour_reminder
        three_days_coach_reminder
        one_day_after_reminder
      }
    } 
  }
 }
`;

export const GET_RESOURCES = `
query{
  resourceFormat{
    id
    name
  }
}
`;

export const GET_MEETING_SETTINGS_BY_LESSON = `
query($user_id: Int,$lesson_id: Int, $group_id: Int){
  meetingByLessonUser(user_id: $user_id, lesson_id:$lesson_id, group_id:$group_id){
    id
    user_id
    group_id
    lesson_id
    invited_by
    meeting_url
    meeting_time
    time_zone
    close_lesson
    coach_notes
    coach_action_steps
    settings{
      id
      lesson_meeting_id
      three_days_coach_reminder
      three_days_reminder
      one_day_reminder
      one_hour_reminder
      three_days_coach_reminder
      one_day_after_reminder
      
    }
  }
}`
  ;

export const GET_LESSON_MEETING = `
query($group_id:Int!, $lesson_id:Int!, $coach_id:Int!, 
  $user_group_id:Int!){
    lessonMeetingSearch(group_id : $group_id, lesson_id : $lesson_id, coach_id : $coach_id, user_group_id:$user_group_id){
      group_id
      lesson_id
      meeting_time
      time_zone
      meeting_url
    }
  }
`;

export const GET_LESSON_ANALYSIS = `
query($group_id:Int!, $user_group_id:Int!, $lesson_id:Int! ){
  lessonAnalysis(group_id : $group_id, user_group_id: $user_group_id, lesson_id : $lesson_id){
    id
    group_id
    lesson_id
    user_id
    profit_impact
    pre_meeting
    attend_meeting
    meeting_worksheet
    taken_quiz
    post_meeting
    progress{
      percentage
    }
    lesson{
      title
    }
    member{
      first_name
      last_name
    }
    training{
      id
      type
      user_id
      video_id
      video_name
      video_progress
      video_time_watched
      video_length
      quiz_score
      quiz_total_questions
    }
  }
}
`;


export const GET_GROUP_ANALYSIS = `
query($group_id:Int!, $user_group_id:Int! ){
  groupAnalysis(group_id : $group_id, user_group_id : $user_group_id){
    id
    group_id
    lesson_id
    user_id
    profit_impact
    pre_meeting
    attend_meeting
    meeting_worksheet
    taken_quiz
    post_meeting
    progress{
      percentage
    }
    lesson{
      title
    }
    member{
      first_name
      last_name
    }
    training{
      id
      type
      user_id
      video_id
      video_name
      video_progress
      video_time_watched
      video_length
      quiz_score
      quiz_total_questions
    }
  }
}
`;



export const TOTAL_UNREAD_EMAILS = `
query($user_id:Int!){
  unreademails(user_id: $user_id)
}
`;


export const GET_EMAILS = `
query($user_id:Int!){
  emails(user_id: $user_id){
    id
    parent
    from
    to
    subject
    body
    read
    attachments
    created_at
    updated_at
    fromuser{
      first_name
      last_name
    }
    touser{
      first_name
      last_name
    }
    previous{
      id
      parent
      from
      to
      subject
      body
      read
      attachments
      created_at
      updated_at
      fromuser{
        first_name
        last_name
      }
      touser{
        first_name
        last_name
      }
    }
  }
}
`;


export const READ_EMAIL = `
mutation($id: Int! ) {
    markEmailRead(id: $id ) {
      success
      message
      data
    }
  }
`;

export const DELETE_EMAILS = `
mutation($user_id: Int!, $list: [String!]!) {
    deleteEmails(user_id: $user_id, list: $list) {
        id
        parent
        from
        to
        subject
        body
        read
        attachments
        created_at
        updated_at
        fromuser{
          first_name
          last_name
        }
        touser{
          first_name
          last_name
        }
        previous{
          id
          parent
          from
          to
          subject
          body
          read
          attachments
          created_at
          updated_at
          fromuser{
            first_name
            last_name
          }
          touser{
            first_name
            last_name
          }
        }
    }
  }
`;

export const GET_USER_LESSON = `
query($group_id:Int, $user_group_id:Int, $lesson_id: Int, $user_id: Int){
  userlesson(
    group_id : $group_id,
    user_group_id : $user_group_id,
    lesson_id : $lesson_id,
    user_id : $user_id,
    ){
    id
    coach_id
    title
    slug
    short_desc
    full_desc
    lesson_img
    lesson_video
    quiz_url
    published
    free_lesson
    price
    created_at
    updated_at
    group{
      id
      title
      name
      status
      meets_on
    }
    resources{
      id
      url
      type{
        id
        name
        owner
        order
      }
    }
  }
}
`;


// END GQL Queries


// Begin GQL Mutations

export const CREATE_LESSONS = `
    mutation(
      $group_id: ID!,
      $title: String!,
      $slug: String,
      $full_desc: String!,
      $lesson_img: String,
      $published: Boolean!,
      $free_lesson: Boolean!,
      $price: String!,
      $file_upload: [resourceurlinput]!,
      $resource_type: [resourcetypeinput]!,
      ) {
        newLesson(
      group_id: $group_id,
      title: $title,
      slug: $slug,
      full_desc: $full_desc,
      lesson_img: $lesson_img,
      published: $published,
      free_lesson: $free_lesson,
      price: $price,
      file_upload: $file_upload
      resource_type: $resource_type,
           ) {
          success
          message
          data
        }
      }`;



export const UPDATE_LESSONS = `
    mutation(
      $lesson_id: Int!,
      $title: String!,
      $slug: String,
      $short_desc: String!,
      $full_desc: String!,
      $lesson_img: String,
      $published: Boolean!,
      $free_lesson: Boolean!,
      $price: String!,
      $resource_type: [resourcetypeinput]!,
      $file_upload: [resourceurlinput]!,
      ) {
        updateLesson(
          lesson_id: $lesson_id,
          title: $title,
          slug: $slug,
          short_desc: $short_desc,
          full_desc: $full_desc,
          lesson_img: $lesson_img,
          published: $published,
          free_lesson: $free_lesson,
          price: $price,
          resource_type: $resource_type,
          file_upload: $file_upload
           ) {
          success
          message
          data
        }
      }`;


export const CREATE_GROUP = `
mutation(
  $title: String!,
  $slug: String,
  $description: String!,
  $group_img: String,
  $active: Boolean,
  $price: Int!,
  $payment_frequency: String!,
  ) {
    newGroup(
      title: $title,
      slug: $slug,
      description: $description,
      group_img: $group_img,
      active: $active,
      price: $price,
      payment_frequency: $payment_frequency 
       ) {
      success
      message
      data
    }
  }`;


export const UPDATE_GROUP = `
  mutation(
    $title: String!,
    $slug: String,
    $description: String!,
    $group_img: String,
    $active: Boolean,
    $price: Int!,
    $payment_frequency: String!,
    $id: Int!,
    ) {
      updateGroup(
        title: $title,
        slug: $slug,
        description: $description,
        group_img: $group_img,
        active: $active,
        price: $price,
        payment_frequency: $payment_frequency,
        id: $id,
         ) {
        success
        message
        data
      }
    }`;


export const DEL_RESOURCE = `
mutation(
  $id: ID!,
  ) {
    archiveResource(
      id: $id,
       ) {
      success
      message
    }
  }
`;

export const CREATE_MEMBER = `
mutation(
  $first_name: String!,
  $last_name: String!,
  $email: String!,
  $invited_by: Int!,
  $group_id: Int!,
  $user_group_id: Int!,
  ) {
    newMember(
      first_name: $first_name,
      last_name: $last_name,
      email: $email,
      invited_by: $invited_by,
      group_id: $group_id,
      user_group_id: $user_group_id,
       ) {
      success
      message
      data
    }
  }`;


export const UPDATE_MEMBER = `
mutation(
  $first_name: String!,
  $last_name: String,
  $email: String!,
  $member_id: Int!,
  ) {
    updateMember(
      first_name: $first_name,
      last_name: $last_name,
      email: $email,
      member_id: $member_id,
       ) {
      success
      message
      data
    }
  }`;

export const UPDATE_LESSON_MEETING_SETTINGS = `
mutation(
  $id: ID!, $meeting_settings: [meetingsettings], $apply_to_all: Boolean! ) {
    updateLessonMeetingSetting(id: $id, meeting_settings: $meeting_settings, apply_to_all: $apply_to_all) {
      success
      message
      data
    }
  }`;

export const UPDATE_LESSON_MEETING = `
mutation(
  $meeting_time: String,
  $time_zone: String,
  $meeting_url: String,
  $coach_notes: String,
  $coach_action_steps: String,
  $id: ID,
  ) {
    updateLessonMeeting(
      meeting_time: $meeting_time,
      time_zone: $time_zone,
      meeting_url: $meeting_url,
      coach_notes: $coach_notes,
      coach_action_steps: $coach_action_steps,
      id: $id
       ) {
      success
      message
      data
    }
  }`;

export const DEL_USER_GROUP = `
mutation(
  $id: ID!,
  ) {
    archiveUserGroup(
      id: $id,
       ) {
      success
      message
    }
  }
`;


export const GET_GROUP_LESSONS = `
  query($id:ID, $user_id: Int, $user_group_id: Int){
    group(id: $id, user_id: $user_id, user_group_id: $user_group_id){
      lessons{
        id
        title,
        created_at
      }
    }
  }
`;
