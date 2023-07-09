export const companyDetails = [
  {
    duration: 'Sep 2022 - Present',
    companyName: 'Procure Networks',
    role: 'Software Developer Intern',
    link: null,
    roleDescription: [
      'Solved the problem of sorting a NoSQL document by exterior fields using Kafka and MongoDB. Kafka triggers an event when there is a change in any field of the document. A consumer service watches this event and makes changes to all the documents where this field is used as an exterior field for sorting',
      'Establishing a system that lets users store, access, and share assets from various sources and vendors in a centralized database and provide management and order request services for these items',
      'Achieved 20-25% reduction in latency by creating a lookup aggregator service for optimized search across inventory by maintaining a NoSQL cache database and updating at regular intervals by running Cron jobs and Graphql queries',
      'Engineering data pipelines to normalize products from different vendors into one standard mapping, thereby facilitating faster search and access across all products in an inverted Elasticsearch index',
      'Adding a Reminder feature for users to give them scheduled reminders on their asset items, by initiating a polling service and storing scheduled jobs in the database'
    ]
  },
  {
    duration: 'Jun 2022 - Aug 2022',
    companyName: 'Influxdata',
    role: 'Engineering Intern',
    link: null,
    roleDescription: [
      'The product uses AWS Marketplace for user subscription. In order to test the integrations, a local application that mocks AWS Marketplace requests was needed to expedite the testing process and save API consumption',
      'Created a local simulator of AWS Marketplace responsible for onboarding 70% of user base of the company using a functional Programming Language Elixir',
      'Designed a Queuing and Notification service to send user-registration messages to local queues during the subscription process',
      'Conceptualized an architecture to send notifications dynamically and poll local queues at regular intervals, thus duplicating AWS SNS and SQS services locally.The local queue environment was achieved using elasitcMQ and docker container',
      'Collaborated with the internal team to test user onboarding without AWS Marketplace dependency making the process 40% faster',
    ]
  },
  {
    duration: 'Dec 2020 - Jun 2021',
    companyName: 'Shipmnts',
    role: 'Software Developer Intern',
    link: null,
    roleDescription: [
      'Implemented queue-based backend service to deliver live tracking data of containers traveling, using a Subscription based architecture',
      'Programmed Cron Jobs to asynchronously fetch and update container data at regular intervals from external APIs and store it in a NO-SQL database. Time intervals were adjusted at runtime based on previous tracking data, reducing API and resource consumption by 50%',
      'Formulated a Redis-backed Queue architecture to delegate large asynchronous tasks to several queues, making the service distributed and improving performance and scalability but 30%',
      'Developed an Email notification system aiding clients to send emails having subject, content, and attachments, pre-filled by the system',
      'Constructed an asynchronous job processing service to dynamically parse values based on user data and discharge emails from the backend by AWS Simple Email Service. Email templates were stored in string format in the database to improve the efficiency of the overall system',
      'Engineering data pipelines to normalize products from different vendors into one standard mapping, thereby facilitating faster search and access across all products in an inverted Elasticsearch index',
      'Developed a Gmail Plugin allowing users to upload documents and start jobs to process uploaded files in the cloud from the Gmail inbox itself',
      'Incorporated Google scope rules to access the metadata of emails including files attached, subject, content, labels, etc to send via an HTTP request'
    ]
  },
  {
    duration: 'Jun 2020 - Sep 2020',
    companyName: 'Taasha Technologies',
    role: 'Software Developer Intern',
    link: null,
    roleDescription: [
      'Built a search box in an e-commerce website, giving search and access to more than 20,000 products stored in a centralized inventory',
      'Orchestrated database design to optimize search filters by distributing products in categories and sub-categories, giving a tree-like data structure, making relational data less redundant and SQL queries more efficient, improving latency by 30%',
    ]
  }
]