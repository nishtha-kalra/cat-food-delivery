import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { Cat } from '../cat/interfaces';

@Controller('comms')
export class CommsController {
  constructor(private readonly userService: UserService) {}

  @Get('your-next-delivery/:userId')
  getNextDelivery(@Param('userId') userId: string) {
    const user = this.userService.findAll().find((user: { id: string; }) => user.id === userId);
    
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const activeCats = user.cats.filter((cat: { subscriptionActive: any; }) => cat.subscriptionActive);

    if (activeCats.length === 0) {
      throw new NotFoundException('No active subscriptions for this user');
    }

    const catNames = activeCats.map((cat: { name: any; }) => cat.name);
    let formattedCatNames = catNames.join(', ').replace(/, ([^,]*)$/, ' and $1');

    
    // Price mapping for pouch sizes
    const pouchPrices = {
        'A': 55.50,
        'B': 59.50,
        'C': 62.75,
        'D': 66.00,
        'E': 69.00,
        'F': 71.25
    };
    
    let totalPrice = 0;

    activeCats.forEach((cat: Cat) => {
        const price = pouchPrices[cat.pouchSize];
        totalPrice += price;
    });

    const freeGift = totalPrice > 120;

    return {
      title: `Your next delivery for ${formattedCatNames}`,
      message: `Hey ${user.firstName}! In two days' time, we'll be charging you for your next order for ${formattedCatNames}'s fresh food.`,
      totalPrice: totalPrice.toFixed(2),
      freeGift,
    };
  }
}