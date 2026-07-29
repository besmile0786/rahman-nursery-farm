export const RAHMAN_WHATSAPP_NUMBER = '923040450065'; // User Specified Official WhatsApp Number: 03040450065

export const generatePlantWhatsAppLink = ({
  plantName,
  plantPrice,
  potName = 'Default Nursery Pot',
  potPrice = 0,
  customerName = '',
  city = 'Lahore',
  phone = '',
  quantity = 1,
  specialNotes = ''
}) => {
  const totalPrice = (plantPrice + potPrice) * quantity;
  
  const text = `🌿 *NEW PLANT ORDER - RAHMAN NURSERY FARM* 🌿
------------------------------------------
*Plant Name:* ${plantName}
*Quantity:* ${quantity}
*Selected Planter Pot:* ${potName}
*Price Per Unit:* PKR ${plantPrice.toLocaleString()} + PKR ${potPrice.toLocaleString()} (Pot)
*Total Estimated Amount:* PKR ${totalPrice.toLocaleString()}

*CUSTOMER DELIVERY DETAILS:*
• *Customer Name:* ${customerName || 'Valued Customer'}
• *Delivery City:* ${city}
• *Phone Number:* ${phone || 'Will share in WhatsApp chat'}
${specialNotes ? `• *Special Notes:* ${specialNotes}` : ''}

Hello Rahman Nursery Farm (0304-0450065), I would like to confirm plant availability, request actual photos from your greenhouse, and arrange fast delivery to my location!`;

  return `https://wa.me/${RAHMAN_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

export const generateLandscapeInquiryLink = ({
  projectType = 'Residential Villa',
  city = 'Lahore',
  areaSize = '1 Kanal',
  customerName = '',
  phone = ''
}) => {
  const text = `🏡 *LANDSCAPE ARCHITECTURE CONSULTATION REQUEST* 🏡
-------------------------------------------------
Hello Rahman Nursery Farm Landscape Team (0304-0450065),

I would like to schedule a 3D landscape architecture consultation for my plot:

• *Project Type:* ${projectType}
• *Location / Society:* ${city}
• *Plot / Lawn Area:* ${areaSize}
• *Contact Person:* ${customerName || 'Valued Client'}
• *Phone Number:* ${phone || 'Will share in chat'}

Please connect me with your Senior Landscape Architect for a 3D plan & site visit!`;

  return `https://wa.me/${RAHMAN_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};
