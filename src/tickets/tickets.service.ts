import { Injectable } from '@nestjs/common';
import { Ticket } from './ticket.interface.js';

@Injectable()
export class TicketsService {
  private readonly tickets: Ticket[] = [
    {
      id: 1,
      subject: 'Cannot login to account',
      description: 'user cannot access the dashboard after login',
      priority: 'high',
      status: 'open',
      createdAt: '26-09-01T10:00:00.000Z',
    },
    {
      id: 2,
      subject: 'Payment failed',
      description: 'Card payment failes at the checkout step',
      priority: 'medium',
      status: 'open',
      createdAt: '26-09-01T11:30:00.000Z',
    },
    {
      id: 3,
      subject: 'Invoice doenload not working',
      description: 'Invoice PDF download returns at empty files',
      priority: 'low',
      status: 'closed',
      createdAt: '26-09-01T12:45:00.000Z',
    },
  ];

  findAll() {
    return this.tickets;
  }

  findOne(id: number) {
    console.log(id);
    return this.tickets.find((ticket) => ticket.id === id);
  }
}
