---
title: "Notification System - Rust, Actix"
subtitle: "Designing a notification service"
date: "2023"
---

# Notification System - Rust, Actix

Notification systems is the live of modern day a application. Proper implementation
of a notification service will go a long way to determine the success of a business.

Fintech applications are

### Structure

- API request
- Load Balancer
- A rate limiter: Prevent unncessary request.
- API Gateway
- Send notification routes handler
- Add to queues: Prioritize queues. have separate queue for several
  purpose with their order of priority.
- Sent to worker threads - Processing
- Executor: Writes to kinessis which further writes to MySQL. NoSQL DB prefered
- Kinesis: A MQ which writes to the db
- Adding to a database with status: Persisting the data
- Scheduler: if failed retry sending the notification
- Logging
- Observability: A monitoring system is required
  - Grafana
  - Promethus
  - Alerts
  - Health Issues
  - Success Rate
  - Anomalies
  - SLA Measures

### Applications

- Email
  - Templated messages
- InApp: Android & iOS
- SMS

### Delivery worker
- Mailgun
- SES
- Sendgrid
- Twilo
- Sinch
