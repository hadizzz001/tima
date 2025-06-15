"use client";
import { useCart } from '../app/context/CartContext'; 
import { useState } from 'react';

const WhatsAppButton = ({ inputs, items, total, delivery, code }) => {
    const { cart, removeFromCart, updateQuantity, clearCart, isModalOpen, toggleModal ,subtotal} = useCart();
    const [error, setError] = useState(null);

 
    

    // const createOrder =  () => { 
        
    //     fetch('api/sendOrder', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             items,
    //             inputs,
    //             total
    //         })
    //     });
    // };

    const createOrder = async () => {
        try {
            // Step 1: Decrease stock for each product in the order
            for (const item of items) {
                const quantityToDecrease = parseInt(item.quantity, 10); // Convert quantity to integer
    
                const response = await fetch(`/api/stock/${item._id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ qty: quantityToDecrease }),
                });
    
                const result = await response.json();
    
                if (!response.ok) {
                    throw new Error(result.error || "Failed to update stock");
                }
            }
    
            // Step 2: If stock update is successful, create the order
            const orderResponse = await fetch("/api/sendOrder", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    items,
                    inputs,
                    total,
                    delivery,
                    code,

                }),
            });
    
            if (!orderResponse.ok) {
                throw new Error("Failed to create order");
            }
    
            console.log("Order created successfully!");
            alert("Order placed successfully!");
    
        } catch (error) {
            console.error("Error processing order:", error);
            alert(error.message || "Something went wrong");
        }
    };
    
    

    const handleClick = async () => {
        if (!validateInputs(inputs)) {
            setError('All fields are required and on the right format.');
            return;
        }

        const url = createWhatsAppURL(inputs, items , total, delivery, code);
        window.open(url, '_blank');
        createOrder();
        clearCart();
        setError(null);
    };

const validateInputs = (inputs) => {
  const { address, fname, lname, phone, email } = inputs;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return (
    address &&
    fname &&
    lname &&
    phone &&
    email &&
    emailRegex.test(email)
  );
};


    return (
        <div className='container'>
            {error && <div className='myBB3'>{error}</div>}
            <span className="ProvidersSingleProduct--selected">
                <button onClick={handleClick} type="button" className="AddToCart HtmlProductAddToCart" style={{ borderRadius: "0" }}  >
                    <span>Order Now!</span>
                </button>
            </span> 
        </div>
    );
};

export default WhatsAppButton;

const createWhatsAppURL = (inputs, items, total, delivery, code) => { 
    const { address, fname, lname, phone , email} = inputs;

    // Calculate the total amount
    const totalAmount = items.reduce((sum, item) => sum + item.discount * item.quantity, 0);
 
    

    // Formatting the message
    const message = `
    *Customer Information:*
    Email: ${email}
    Name: ${fname} ${lname} 
    Phone: ${phone}
    Address: ${address}

    *Order Details:*
    ${items.map((item, index) => `
      Item ${index + 1}:
      - Name: ${item.title} 
      - Quantity: ${item.quantity}
      - Price: $${item.discount}
      - Image: ${item.img[0]} 
    `).join('\n')}

    Subtotal: $${totalAmount.toFixed(2)}
    Delivery fee: $${delivery}
    *Total Amount:* $${total}
  `;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '96181501028';  
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};
