'use node';
import { v } from 'convex/values';
import twilio from 'twilio';
import { internalAction } from './_generated/server';

export const validateTwilioSignature = internalAction({
	args: {
		signature: v.string(),
		url: v.string(),
		body: v.string(),
	},
	handler: async (ctx, args) => {
		console.log(args);
		return twilio.validateRequestWithBody(
			process.env.TWILIO_AUTH_TOKEN!,
			args.signature,
			args.url,
			args.body
		);
	},
});
